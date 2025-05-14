import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Knoph O. Ayieko | Web Developer | IT Specialist | Virtual Assistant",
    template: "%s | Knoph O. Ayieko Portfolio",
  },
  description:
    "Portfolio of Knoph O. Ayieko, a Full Stack Developer passionate about crafting impactful digital solutions",
  keywords: ["developer", "portfolio", "full stack", "web development", "IT specialist", "virtual assistant"],
  authors: [{ name: "Knoph O. Ayieko" }],
  creator: "Knoph O. Ayieko",
  metadataBase: new URL("https://knophayieko.dev"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
