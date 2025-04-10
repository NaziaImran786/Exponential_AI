"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import { UserButton } from "@clerk/nextjs"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Partners", href: "/partners" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Container for the Navbar */}
      <div className="container px-2 mx-auto flex h-16 items-center justify-between"> {/* Adjusted px for padding */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Exponential AI
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          <ModeToggle />
          <UserButton/>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <ModeToggle />
          <UserButton/>
          <Button
            variant="ghost"
            className="ml-2 px-0 text-base hover:bg-transparent focus:ring-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-base font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
