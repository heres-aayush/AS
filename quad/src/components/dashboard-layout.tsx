"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Bell, Car, ChevronDown, Globe, LogOut, Menu, Moon, Settings, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

// Add this type for language options
type Language = "en" | "bn" | "hi"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "commuter" | "parent" | "driver" | "agency"
  onUserTypeChange: (userType: "commuter" | "parent" | "driver" | "agency") => void
}

export function DashboardLayout({ children, userType, onUserTypeChange }: DashboardLayoutProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // Add language state
  const [language, setLanguage] = useState<Language>("en")

  // Function to handle language change
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    // You can add additional logic here to change the app's language
    // For example, using i18n or similar translation library
  }

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="flex min-h-screen">
        {/* Sidebar for desktop */}
        <div className="hidden md:block">
          <Sidebar userType={userType} onUserTypeChange={onUserTypeChange} />
        </div>

        {/* Mobile sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden absolute top-4 left-4 z-50">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar userType={userType} onUserTypeChange={onUserTypeChange} />
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <Car className="h-6 w-6 text-primary" />
              <h1 className="text-lg font-semibold">RideShare</h1>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                    <span className={language === "en" ? "font-bold" : ""}>English</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLanguageChange("bn")}>
                    <span className={language === "bn" ? "font-bold" : ""}>বাংলা</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLanguageChange("hi")}>
                    <span className={language === "hi" ? "font-bold" : ""}>हिंदी</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* User type selector for mobile */}
          <div className="md:hidden p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span className="capitalize">{userType} Dashboard</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem onClick={() => onUserTypeChange("commuter")}>Commuter Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onUserTypeChange("parent")}>Parent Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onUserTypeChange("driver")}>Driver Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onUserTypeChange("agency")}>Agency Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Main content */}
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

