import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function TumorCategories() {
  const categories = [
    {
      title: "No Tumor",
      description:
        "Normal brain tissue without any tumor presence. Healthy brain scans showing no abnormal growths or masses.",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
      badge: "Normal",
      badgeVariant: "default" as const,
      image: "/images/no.jpeg",
    },
    {
      title: "Tumor Present",
      description:
        "Brain scan showing presence of tumor tissue. Requires immediate medical attention and further analysis.",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900",
      badge: "Tumor Detected",
      badgeVariant: "destructive" as const,
      image: "/images/yes.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Tumor Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our AI system can detect the presence of brain tumors in MRI scans
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto p-4 rounded-full ${category.bgColor} group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <Badge variant={category.badgeVariant} className="w-full justify-center">{category.badge}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex justify-center">
                    <div className="w-32 h-32">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-32 h-32 object-cover rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{category.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
