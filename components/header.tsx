"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#1d1d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <Image 
              src={"/magnifying-glass-emotion-vector-225903-removebg-preview.png"}
              alt="Logo"
              width={50}
              height={40}
              className="mr-3"
            />
            <h1 className="text-2xl font-bold text-white">ImageIQ</h1>
          </div>
          {/* Menus */}
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col sm:flex-row sm:space-x-4 items-center">
              <Link href={"#"}>
                <button className="hidden sm:inline-block bg-[#1d1d1e] text-white px-4 py-2 rounded-md hover:bg-[#2a2e2e] transition-colors duration-200 w-full sm:w-auto mb-2 sm:mb-0">
                  Home
                </button>
              </Link>
              <Link href="#how-it-works">
                <button className="hidden sm:inline-block bg-[#1d1d1e] text-white px-4 py-2 rounded-md hover:bg-[#2a2e2e] transition-colors duration-200 w-full sm:w-auto mb-2 sm:mb-0">
                  How it works?
                </button>
              </Link>
              <Link href={"#features"}>
                <button className="hidden sm:inline-block bg-[#1d1d1e] text-white px-4 py-2 rounded-md hover:bg-[#2a2e2e] transition-colors duration-200 w-full sm:w-auto">
                  Features
                </button>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
