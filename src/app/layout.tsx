import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"
import { ClerkProvider } from "@clerk/nextjs"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Exponential AI",
  description:
    "Exponential AI develops tailored, dynamic AI solutions for enterprises, focusing on building intelligent agents who can think, talk, and act for various business applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatbotButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
