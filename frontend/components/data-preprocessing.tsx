"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Settings, Brain, BarChart3 } from "lucide-react"

export function DataPreprocessing() {
  const preprocessingSteps = [
    {
      title: "Dataset Collection",
      description: "Collected MRI brain scan images with binary labels (Yes/No for tumor presence)",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      details: [
        "Total Images: 200+ MRI scans",
        "Tumor Present: 100 images",
        "No Tumor: 100 images",
        "Image Format: JPEG, PNG",
        "Resolution: 100 x 100 pixels",
      ],
    },
    {
      title: "Data Preprocessing",
      description: "Applied various preprocessing techniques to enhance image quality and normalize data",
      icon: Settings,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
      details: [
        "Image Resizing: 100 x 100 pixels",
        "Normalization: Pixel values [0,1]",
        "Data Augmentation: Rotation, Flip, Zoom",
        "Train/Validation Split: 80/20",
        "Batch Size: 32",
      ],
    },
    {
      title: "Model Architecture",
      description: "Built a Sequential CNN model optimized for binary classification",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      details: [
        "Model Type: Sequential CNN",
        "Total Parameters: 4,353,346",
        "Model Size: 16.61 MB",
        "Activation: ReLU, Softmax",
        "Optimizer: Adam",
      ],
    },
    {
      title: "Training Results",
      description: "Achieved excellent performance with high accuracy and low loss",
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900",
      details: [
        "Final Accuracy: 97.03%",
        "Validation Accuracy: 92.16%",
        "Final Loss: 0.0855",
        "Validation Loss: 0.3086",
        "Training Epochs: 10",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Preprocessing & Model Building
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our approach to building an effective brain tumor detection system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {preprocessingSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full ${step.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        Step {index + 1}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Training Progress Visualization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Training Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-02%20225534-JwhfgNYQgTc3y3oxHmXWSIsOSlaP5k.png"
                alt="Training Progress Logs"
                className="w-full max-w-4xl mx-auto rounded-lg border"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Training logs showing progressive improvement in accuracy and reduction in loss over 10 epochs
            </p>
          </CardContent>
        </Card>

        {/* Model Architecture Details */}
        <Card>
          <CardHeader>
            <CardTitle>Model Architecture Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-02%20225549-25dPfyv7iaJEeKHSf1TocAKJ41zrm1.png"
                alt="Model Architecture Details"
                className="w-full max-w-3xl mx-auto rounded-lg border"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Convolutional Layers</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Conv2D: 32 filters, 3x3 kernel</li>
                  <li>• MaxPooling2D: 2x2 pool size</li>
                  <li>• Conv2D: 64 filters, 3x3 kernel</li>
                  <li>• MaxPooling2D: 2x2 pool size</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Dense Layers</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Flatten Layer</li>
                  <li>• Dense: 128 neurons, ReLU</li>
                  <li>• Dropout: 0.5 rate</li>
                  <li>• Dense: 2 neurons, Sigmoid</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Model Summary</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Total Parameters: 4,353,346</li>
                  <li>• Trainable Parameters: 4,353,346</li>
                  <li>• Model Size: 16.61 MB</li>
                  <li>• Input Shape: (224, 224, 3)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
