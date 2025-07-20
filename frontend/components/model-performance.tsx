"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Target, Zap, Award } from "lucide-react"

export function ModelPerformance() {
  const performanceData = [
    { epoch: 1, accuracy: 0.599, loss: 0.754, val_accuracy: 0.8235, val_loss: 0.4382 },
    { epoch: 2, accuracy: 0.7871, loss: 0.5029, val_accuracy: 0.8235, val_loss: 0.3742 },
    { epoch: 3, accuracy: 0.8119, loss: 0.438, val_accuracy: 0.8824, val_loss: 0.3344 },
    { epoch: 4, accuracy: 0.8465, loss: 0.394, val_accuracy: 0.902, val_loss: 0.3135 },
    { epoch: 5, accuracy: 0.8663, loss: 0.3363, val_accuracy: 0.9216, val_loss: 0.2742 },
    { epoch: 6, accuracy: 0.8861, loss: 0.2873, val_accuracy: 0.8431, val_loss: 0.3031 },
    { epoch: 7, accuracy: 0.9158, loss: 0.2471, val_accuracy: 0.902, val_loss: 0.26 },
    { epoch: 8, accuracy: 0.9257, loss: 0.1739, val_accuracy: 0.9412, val_loss: 0.2451 },
    { epoch: 9, accuracy: 0.9653, loss: 0.1383, val_accuracy: 0.9412, val_loss: 0.2576 },
    { epoch: 10, accuracy: 0.9703, loss: 0.0855, val_accuracy: 0.9216, val_loss: 0.3086 },
  ]

  const modelComparison = [
    { model: "ANN", accuracy: 0.87, precision: 0.85, recall: 0.86, f1: 0.85 },
    { model: "CNN", accuracy: 0.94, precision: 0.93, recall: 0.94, f1: 0.93 },
    { model: "Transfer Learning", accuracy: 0.97, precision: 0.96, recall: 0.97, f1: 0.96 },
  ]

  const stats = [
    {
      title: "Final Accuracy",
      value: "97.03%",
      description: "Training Accuracy",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "Validation Accuracy",
      value: "92.16%",
      description: "Cross-validation Score",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
    },
    {
      title: "Final Loss",
      value: "0.0855",
      description: "Training Loss",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Validation Loss",
      value: "0.3086",
      description: "Validation Loss",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our CNN Model Statistics</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Performance metrics and training results</p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className={`mx-auto p-3 rounded-full ${stat.bgColor} w-fit mb-4`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{stat.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Training Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Training Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} name="Training Accuracy" />
                  <Line
                    type="monotone"
                    dataKey="val_accuracy"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Validation Accuracy"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
