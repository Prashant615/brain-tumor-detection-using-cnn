"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, ImageIcon, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { getApiEndpoint } from "@/lib/config"

type PredictionResult = {
  label: string;
  confidence: number;
  prediction: string;
  probability: number;
};


export function PredictionSection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
      setResult(null)
      setError(null)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".bmp", ".tiff"],
    },
    multiple: false,
  })

  const handlePredict = async () => {
    if (!selectedFile) return;
  
    setIsLoading(true);
    setError(null);
  
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      const response = await fetch(getApiEndpoint("/predict"), {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Server error during prediction");
      }
  
      const data = await response.json();
  
      const result: PredictionResult = {
        label: data.label,
        confidence: data.confidence,
        prediction: data.prediction,
        probability: data.probability,
      };
  
      setResult(result);
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Failed to classify image. Make sure the backend is running.");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  const resetPrediction = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setResult(null)
    setError(null)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Interactive Prediction</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Upload an MRI scan to classify brain tumor type</p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload MRI Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                }`}
              >
                <input {...getInputProps()} />
                {previewUrl ? (
                  <div className="space-y-4">
                    <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedFile?.name}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ImageIcon className="h-12 w-12 mx-auto text-gray-400" />
                    <div>
                      <p className="text-lg font-medium">
                        {isDragActive ? "Drop the image here" : "Drag & drop an MRI image"}
                      </p>
                      <p className="text-sm text-gray-500">or click to select (JPEG, PNG, BMP, TIFF)</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex space-x-4 mt-6">
                <Button onClick={handlePredict} disabled={!selectedFile || isLoading} className="flex-1">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Classifying...
                    </>
                  ) : (
                    "Detect & Classify"
                  )}
                </Button>
                <Button variant="outline" onClick={resetPrediction} disabled={isLoading}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Classification Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 mb-4">
                  <AlertCircle className="h-5 w-5" />
                  <span>{error}</span>
                </div>
              )}

              {result ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <Badge
                      variant={result.prediction === "Yes" ? "destructive" : "default"}
                      className="text-lg px-4 py-2"
                    >
                      {result.label}
                    </Badge>
                    <p className="text-2xl font-bold mt-2">{result.confidence.toFixed(1)}% Confidence</p>
                    <p className="text-lg mt-1">Tumor Probability: {(result.probability * 100).toFixed(1)}%</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Classification Result:</h4>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Prediction:</span>
                        <span
                          className={`font-bold ${result.prediction === "Yes" ? "text-red-600" : "text-green-600"}`}
                        >
                          {result.prediction === "Yes" ? "Tumor Present" : "No Tumor"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-medium">Confidence Score:</span>
                        <span className="font-bold">{result.confidence.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Upload an image to see classification results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
