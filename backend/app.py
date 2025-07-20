# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ Add CORS to allow frontend to connect
import tensorflow as tf
import numpy as np
import cv2

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all routes

# Load the model once when the server starts
model = tf.keras.models.load_model("brain_tumor_cnn_model.h5")
IMAGE_SIZE = 100  # Make sure it matches the training size

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Welcome to the Brain Tumor Detection API"}), 200

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    npimg = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    if img is None:
        return jsonify({"error": "Invalid image format"}), 400

    # Preprocess image
    img = cv2.resize(img, (IMAGE_SIZE, IMAGE_SIZE)) / 255.0
    img = np.expand_dims(img, axis=0)

    # Predict
    pred = model.predict(img)[0]
    class_index = int(np.argmax(pred))

    result = {
        "label": "Tumor Detected" if class_index == 1 else "No Tumor",
        "prediction": "Yes" if class_index == 1 else "No",
        "confidence": round(float(pred[class_index]) * 100, 2),
        "probability": round(float(pred[class_index]), 4)
    }

    return jsonify(result)

# ✅ Ensure this only runs when executed directly
if __name__ == "__main__":
    app.run(debug=True, port=5000)
