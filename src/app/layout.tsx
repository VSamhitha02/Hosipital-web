import Header from "@/components/Header"
import "./globals.css"

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
      </body>
    </html>
  )
}
