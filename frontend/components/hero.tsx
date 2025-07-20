import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Scan } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/02.jpg'), linear-gradient(to bottom right, #eff6ff, #c7d2fe)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Opacity should be handled on a separate overlay div, not here.
      }}
    >
      {/* Overlay for dark mode and readability */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 pointer-events-none" aria-hidden="true"></div>
      <div className="relative container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-[#e0e0f0]">
            Brain Tumor Classification
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            Classifying Brain Tumor using Advanced Machine Learning
          </p>

          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Brain Tumor Classification</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      Classify tumor types using AI models
                    </p>
                    <Button className="w-full">Start Classification</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
