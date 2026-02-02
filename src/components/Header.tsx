"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Search, Phone } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"}`}
      >
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Vitalis Hospital Logo"
              width={48}
              height={48}
              priority
            />

            <div className="leading-tight hidden sm:block">
              <h1 className="text-lg font-bold text-green-700">Vitalis</h1>
              <p className="text-[11px] text-gray-500 tracking-wide">
                SUPER SPECIALITY CHILDREN HOSPITAL
              </p>
            </div>
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search doctors"
                className="pl-10"
              />
            </div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 text-sm">
              📞 +91 91508 51095
            </div>
            <Button className="bg-purple-700 text-white">
              Book Appointment
            </Button>
          </div>

          {/* MOBILE / TABLET ICONS */}
          <div className="lg:hidden ml-auto flex items-center gap-2 ">
            {/* PHONE ICON */}
            <a href="tel:+919150851095" aria-label="Call hospital">
              <Button variant="ghost" size="icon" >
                <Phone className="h-5 w-5" />
              </Button>
            </a>

            {/* SEARCH ICON */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Search">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="top" className="p-4">
                <SheetTitle className = "sr-only">
                  search
                </SheetTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search doctors"
                    className="pl-10"
                  />
                </div>
              </SheetContent>
            </Sheet>

            {/* HAMBURGER MENU */}
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-white" 
                variant="ghost" size="icon" aria-label="Menu">
                  ☰
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 p-0 bg-white">
                {/* MOBILE NAV */}
                <nav className="p-4 space-y-3 font-medium bg-white">
                  <Link href="/" className="block px-4 py-3 rounded-xl border">
                    Home
                  </Link>

                  <div className="border rounded-xl">
                    <Button
                      variant="ghost"
                      onClick={() =>
                        setOpenDropdown(openDropdown === "child" ? null : "child")
                      }
                      className="w-full px-4 py-3 flex justify-between"
                    >
                      Child Care <span>▾</span>
                    </Button>

                    {openDropdown === "child" && (
                      <div className="px-4 pb-3 space-y-2 text-sm ">
                        <Link href="#">Pediatrics</Link>
                        <Link href="#">Neonatal Care</Link>
                      </div>
                    )}
                  </div>

                  <Link href="/doctors" className="block px-4 py-3 rounded-xl border">
                    Our Doctors
                  </Link>
                  <Link href="#" className="block px-4 py-3 rounded-xl border">
                    Facilities
                  </Link>
                  <Link href="#" className="block px-4 py-3 rounded-xl border">
                    Careers
                  </Link>
                  <Link href="#" className="block px-4 py-3 rounded-xl border">
                    About Us
                  </Link>
                  <Link href="#" className="block px-4 py-3 rounded-xl border">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:block border-t bg-white">
          <nav className="max-w-7xl mx-auto">
            <ul className="flex justify-center gap-14 py-3 font-semibold">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">Child Care</Link></li>
              <li><Link href="/doctors">Our Doctors</Link></li>
              <li><Link href="#">Facilities</Link></li>
              <li><Link href="#">Parenting</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
