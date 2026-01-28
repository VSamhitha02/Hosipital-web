"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* TOP BAR */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Vitalis
            </h1>
            <p className="text-xs text-gray-600 tracking-wide">
              SUPER SPECIALITY CHILDREN HOSPITAL
            </p>
          </div>

         {/* Search */}
        <input
          className="
            hidden md:block
            w-56 lg:w-72
            rounded-full border
            px-4 py-2
            text-sm
            focus:outline-none
            focus:ring-2 focus:ring-purple-500
          "
          placeholder="Search Doctors"
        />

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-purple-100 px-5 py-2 rounded-full text-purple-700 text-sm font-medium">
              📞 +91 91508 51095
            </div>

            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition">
              Book Appointment
            </button>

            <div className="w-10 h-10 flex items-center justify-center border rounded-full">
              👤
            </div>
          </div>
        </div>
      </div>

      {/* NAV BAR (TRANSPARENT LIKE IMAGE 2) */}
      <div className="border-t border-black/20">
        <nav className="max-w-7xl mx-auto">
          <ul className="flex justify-center gap-14 py-6 text-base font-semibold text-black">
            <li><Link href="/">Home</Link></li>

            <li className="relative group">
              <span className="cursor-pointer">
                Child Care ▾
              </span>
              <div className="absolute left-0 top-full mt-4 w-52 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link href="#" className="block px-6 py-3 hover:bg-purple-50">Pediatrics</Link>
                <Link href="#" className="block px-6 py-3 hover:bg-purple-50">Neonatal Care</Link>
              </div>
            </li>

            <li><Link href="/doctors">Our Doctors</Link></li>
            <li><Link href="#">Facilities</Link></li>

            <li className="relative group">
              <span className="cursor-pointer">
                Parenting ▾
              </span>
              <div className="absolute left-0 top-full mt-4 w-52 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link href="#" className="block px-6 py-3 hover:bg-purple-50">Tips</Link>
                <Link href="#" className="block px-6 py-3 hover:bg-purple-50">Nutrition</Link>
              </div>
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
