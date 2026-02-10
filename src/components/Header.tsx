"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search, Phone } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all
      ${scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"}`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Vitalis Hospital Logo"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-green-500">
              Vitalis
            </h1>
            <p className="text-[11px] text-gray-500">
              SUPER SPECIALITY CHILDREN HOSPITAL
            </p>
          </div>
        </Link>

        {/* DESKTOP SEARCH */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input placeholder="Search doctors" className="pl-10" />
          </div>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
            📞 +91 91508 51095
          </div>
          <Button>Book Appointment</Button>
        </div>

        {/* MOBILE ICONS */}
        <div className="lg:hidden ml-auto flex items-center gap-2">
          <a href="tel:+919150851095">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
          </a>

          {/* MOBILE SEARCH */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="p-6 bg-white">
              <SheetTitle className="sr-only">Search</SheetTitle>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search doctors, services..."
                  className="pl-12 h-12 text-base"
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* HAMBURGER MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">☰</Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 bg-white p-6">
  <SheetTitle className="sr-only">Menu</SheetTitle>

  {/* PROFILE + CTA */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-primary text-lg">
      👤
    </div>

    <div>
      
      <p className="font-semibold">Guest User</p>
    </div>
  </div>

  

  {/* DIVIDER */}
  <div className="border-b mb-6" />

  {/* NAVIGATION */}
  <nav className="space-y-2 text-[15px] font-medium">

    <Link
      href="/"
      className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-100"
    >
      Home
    </Link>

    {/* ACCORDION */}
    <Accordion type="single" collapsible className="w-full">

      <AccordionItem value="child-care" className="border-none">
        <AccordionTrigger className="px-3 py-3 hover:bg-gray-100 rounded-md">
          Child Care
        </AccordionTrigger>
        <AccordionContent className="pl-6 pb-2 space-y-2 text-sm">
          <Link href="#" className="block py-1 hover:text-primary">
            Pediatrics
          </Link>
          <Link href="#" className="block py-1 hover:text-primary">
            Neonatal Care
          </Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="parenting" className="border-none">
        <AccordionTrigger className="px-3 py-3 hover:bg-gray-100 rounded-md">
          Parenting
        </AccordionTrigger>
        <AccordionContent className="pl-6 pb-2 space-y-2 text-sm">
          <Link href="#" className="block py-1 hover:text-primary">
            Blogs
          </Link>
          <Link href="#" className="block py-1 hover:text-primary">
            Tips
          </Link>
        </AccordionContent>
      </AccordionItem>

    </Accordion>

    <Link
      href="/doctors"
      className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-100"
    >
      Our Doctors
    </Link>

    <Link
      href="#"
      className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-100"
    >
      Facilities
    </Link>

    <Link
      href="#"
      className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-100"
    >
      Careers
    </Link>

    <Link
      href="#"
      className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-100"
    >
      About Us
    </Link>

    <Link
      href="#"
      className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-100"
    >
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

            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  Child Care ▾
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild><Link href="#">Pediatrics</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="#">Neonatal Care</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li><Link href="/doctors">Our Doctors</Link></li>
            <li><Link href="#">Facilities</Link></li>

            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  Parenting ▾
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild><Link href="#">Tips</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="#">Nutrition</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>

          </ul>
        </nav>
      </div>
    </header>
  )
}
