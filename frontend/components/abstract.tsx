import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function Abstract() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Abstract</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Understanding our approach to brain tumor classification
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <span>Brain Tumor Classification using Deep Learning (CNN)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Brain tumors are among the most serious medical conditions that require early and accurate diagnosis for
                effective treatment. This project presents an advanced deep learning approach for automated brain tumor
                detection using MRI scan analysis.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our system employs a Convolutional Neural Network (CNN) to perform binary classification, determining
                whether a brain tumor is present or absent in MRI scans. The model was trained on a comprehensive
                dataset of labeled MRI images with "Yes" and "No" classifications for tumor presence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The implementation achieved an impressive 97.03% training accuracy and 92.16% validation accuracy,
                demonstrating the effectiveness of our CNN architecture in medical image analysis. The model processes
                100x100 pixel MRI images and provides confident predictions with probability scores.
              </p>
              {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This research contributes to the field of medical AI by providing a reliable, automated solution that
                can assist healthcare professionals in making faster and more accurate diagnoses, ultimately improving
                patient outcomes through early tumor detection.
              </p> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
