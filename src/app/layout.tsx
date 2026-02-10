import Header from "@/components/Header"
import "./globals.css"
import { Poppins, Inter } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="h-[96px] lg:h-[120px]" />
        {children}
        {/* <Toaster /> */}
        </body>
        </html>
  )
}
