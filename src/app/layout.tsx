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
        {/* <div className="bg-red-500 text-white p-2">NAV TEST</div> */}

        <Header /> 
        <main className="pt-28">
          {children}
          </main>    
        
      </body>
    </html>
  )
}
