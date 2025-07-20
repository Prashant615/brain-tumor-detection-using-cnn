import os
import cv2
import numpy as np
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.models import load_model


data = []
labels = []

IMAGE_SIZE = 100
DATASET_DIR = 'dataset'

for label, folder in enumerate(['no', 'yes']):
    folder_path = os.path.join(DATASET_DIR, folder)
    for file in os.listdir(folder_path):
        img_path = os.path.join(folder_path, file)
        img = cv2.imread(img_path)
        if img is not None:
            img = cv2.resize(img, (IMAGE_SIZE, IMAGE_SIZE))
            data.append(img)
            labels.append(label)

data = np.array(data) / 255.0
labels = to_categorical(labels)

x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, random_state=42)


model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(IMAGE_SIZE, IMAGE_SIZE, 3)),
    MaxPooling2D(pool_size=(2, 2)),
    
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),

    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(2, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.summary()


model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=10, batch_size=32)


model.save('brain_tumor_cnn_model.h5')
print("Model saved as brain_tumor_cnn_model.h5")


def predict_image(img_path):
    model = load_model('brain_tumor_cnn_model.h5')
    img = cv2.imread(img_path)
    img = cv2.resize(img, (IMAGE_SIZE, IMAGE_SIZE)) / 255.0
    img = np.expand_dims(img, axis=0)
    pred = model.predict(img)
    class_index = np.argmax(pred)
    result = "Tumor Detected" if class_index == 1 else "No Tumor"
    print(f"Prediction: {result}")

