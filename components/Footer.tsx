import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-[#1d1d1e] p-4'>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side: Logo and Name */}
        <div className="flex items-center">
          <Image 
            src={"/magnifying-glass-emotion-vector-225903-removebg-preview.png"}
            alt="Logo"
            width={50}
            height={40}
            className="mr-3"
          />
          <h1 className="text-2xl font-bold text-white">ImageIQ</h1>
        </div>
        
        {/* Right side: Developer Name and GitHub Icon */}
        <div className="text-right">
          <p className="text-white">Developed by SABARI</p>
          <a 
            href="https://github.com/SAB1825" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white flex items-center justify-end mt-2"
          >
            <FaGithub className="mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
