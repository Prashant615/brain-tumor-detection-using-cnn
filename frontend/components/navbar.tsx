"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  refs: {
    homeRef: React.RefObject<HTMLElement>
    doctorRef: React.RefObject<HTMLElement>
    faqRef: React.RefObject<HTMLElement>
    resultsRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
  }
}

export function Navbar({ scrollToSection, refs }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { name: "Home", ref: refs.homeRef },
    { name: "Doctor Information", ref: refs.doctorRef },
    { name: "FAQ", ref: refs.faqRef },
    { name: "About Us", ref: refs.aboutRef },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary">Brainly</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Button variant="ghost" onClick={() => scrollToSection(item.ref)} className="text-sm font-medium">
                      {item.name}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      onClick={() => {
                        scrollToSection(item.ref)
                        setIsOpen(false)
                      }}
                      className="justify-start"
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
