// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brainly - Brain Tumor Classification",
  description: "AI-powered brain tumor detection using deep learning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
