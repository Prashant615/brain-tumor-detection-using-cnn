import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Information</h2>
          <p className="text-lg text-gray-300">
            Get in touch with our team members
          </p>
        </div>

        {/* Card Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Department of Information Science and Engineering
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    This project is developed as part of the Bachelor of Engineering program in Information Science and Engineering,
                    focusing on the application of artificial intelligence and machine learning in medical image
                    analysis.
                  </p>
                  <p className="text-gray-300">
                    Our research aims to contribute to the advancement of automated medical diagnosis systems and
                    improve healthcare outcomes through technology.
                  </p>

                  {/* Optional Research Areas Section (Uncomment if needed) */}
                  {/* 
                  <div className="pt-4">
                    <h4 className="font-semibold text-white mb-2">Research Areas:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Medical Image Processing</li>
                      <li>• Deep Learning Applications</li>
                      <li>• Computer Vision in Healthcare</li>
                      <li>• AI-Assisted Diagnosis</li>
                    </ul>
                  </div> 
                  */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Bottom */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © JSS Science and Technology University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
