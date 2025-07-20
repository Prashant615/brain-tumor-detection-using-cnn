// app/page.tsx
"use client"

import type React from "react"
import { useRef } from "react"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Abstract } from "@/components/abstract"
import { TumorCategories } from "@/components/tumor-categories"
import { PredictionSection } from "@/components/prediction-section"
import { ModelPerformance } from "@/components/model-performance"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { DataPreprocessing } from "@/components/data-preprocessing"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const homeRef = useRef<HTMLElement>(null)
  const doctorRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className={`${inter.className} min-h-screen bg-background`}>
        <Navbar scrollToSection={scrollToSection} refs={{ homeRef, doctorRef, faqRef, resultsRef, aboutRef }} />

        <main>
          <section ref={homeRef}>
            <Hero />
          </section>

          <section ref={doctorRef}>
            <Abstract />
          </section>

          <TumorCategories />

          <section ref={resultsRef}>
            <PredictionSection />
          </section>

          <section ref={faqRef}>
            <ModelPerformance />
          </section>

          <DataPreprocessing />

          <section ref={aboutRef}>
            <Footer />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}
