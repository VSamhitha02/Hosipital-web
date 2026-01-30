"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
          {/* LEFT: Logo + Text */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Vitalis Hospital Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />

            <div className="leading-tight hidden sm:block">
              <h1 className="text-lg font-bold text-green-700">Vitalis</h1>
              <p className="text-[11px] text-gray-500 tracking-wide">
                SUPER SPECIALITY CHILDREN HOSPITAL
              </p>
            </div>
          </Link>

          {/* Spacer */}
          <div className="flex-1 lg:hidden" />

          {/* HAMBURGER MENU (Mobile & Tablet) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ☰
          </button>

          {/* SEARCH BAR (Desktop only) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <input
              type="text"
              placeholder="Search Doctors"
              className="h-11 w-full max-w-sm rounded-full border border-gray-300 px-5 shadow
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* DESKTOP ACTIONS (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 text-sm">
              📞 +91 91508 51095
            </div>
            <button className="bg-purple-700 text-white px-5 py-2 rounded-lg">
              Book Appointment
            </button>
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

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            👤
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-3 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl border">
            Home
          </Link>

          <div className="border rounded-xl">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "child" ? null : "child")
              }
              className="w-full px-4 py-3 flex justify-between"
            >
              Child Care <span>▾</span>
            </button>

            {openDropdown === "child" && (
              <div className="px-4 pb-3 space-y-2 text-sm">
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
      </aside>
    </>
  )
}
