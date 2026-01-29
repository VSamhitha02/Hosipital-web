"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full">
        <div
          className={`transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
  
  {/* Hamburger (Mobile / Tablet) */}
  <button
    onClick={() => setMenuOpen(true)}
    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
  >
    ☰
  </button>

  {/* Logo + Text */}
  <div className="leading-tight">
    <h1 className="text-lg font-bold text-green-700">
      Vitalis
    </h1>
    <p className="text-[11px] text-gray-500 tracking-wide">
      SUPER SPECIALITY CHILDREN HOSPITAL
    </p>
  </div>
  {/* Search */} <input className="  m-6 justify-between hidden md:block w-56 lg:w-72 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 " 
  placeholder="Search Doctors" />

  {/* Spacer */}
  <div className="flex-1" />

  {/* Desktop Right Side */}
  <div className="hidden lg:flex items-center gap-4">
    <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 text-sm">
      📞 +91 91508 51095
    </div>
    <button className="bg-purple-700 text-white px-5 py-2 rounded-lg">
      Book Appointment
    </button>
  </div>

</div>

        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:block border-t bg-white">
          <nav className="max-w-7xl mx-auto">
            <ul className="flex justify-center gap-12 py-4 font-semibold">
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
          className=" bg-white fixed inset-0 bg-black/40 z-40 "
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE RIGHT DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
  {/* User Icon */}
  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
    👤
  </div>

  {/* Close Button */}
  <button
    onClick={() => setMenuOpen(false)}
    className="text-2xl text-gray-600"
  >
    ✕
  </button>
</div>


        {/* Drawer Content */}
        <nav className="p-6 space-y-6 text-lg font-semibold">

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Child Care Dropdown */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "child" ? null : "child")
              }
              className="flex justify-between w-full"
            >
              Child Care <span>▾</span>
            </button>
            {openDropdown === "child" && (
              <div className="ml-4 mt-2 space-y-2 text-base text-gray-600">
                <Link href="#">Pediatrics</Link>
                <Link href="#">Neonatal Care</Link>
              </div>
            )}
          </div>

          <Link href="/doctors" onClick={() => setMenuOpen(false)}>Our Doctors</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Facilities</Link>

          {/* Parenting Dropdown */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "parent" ? null : "parent")
              }
              className="flex justify-between w-full"
            >
              Parenting <span>▾</span>
            </button>
            {openDropdown === "parent" && (
              <div className="ml-4 mt-2 space-y-2 text-base text-gray-600">
                <Link href="#">Tips</Link>
                <Link href="#">Nutrition</Link>
              </div>
            )}
          </div>

          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact Us</Link>

          <button className="mt-6 w-full bg-purple-700 text-white py-3 rounded-lg">
            Book Appointment
          </button>
        </nav>
      </aside>
    </>
  )
}
