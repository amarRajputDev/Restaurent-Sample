"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { ChevronDown, Menu } from 'lucide-react'


function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
       <header className="container mx-auto py-4 flex justify-between items-center">
        <div data-aos="fade-up" className="flex items-center">
          
          <span  className="text-2xl font-bold text-[#FF6B6B]">Radhika</span>
        </div>
        <Button variant="outline" className='lg:hidden border-[#FF6B6B] '><Menu className='text-[#FF6B6B]' /></Button>
        <nav className='hidden lg:block'>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-[#FF6B6B] font-medium">Home</a></li>
            <li className="relative group">
              <button 
                className="text-gray-600 flex items-center"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                Our Menu <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <ul 
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-20 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Breakfast</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lunch</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dinner</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Desserts</a>
                </li>
              </ul>
            </li>
            <li><a href="#" className="text-gray-600">Foods</a></li>
            <li><a href="#" className="text-gray-600">About us</a></li>
            <li><a href="#" className="text-gray-600">Contact us</a></li>
          </ul>
        </nav>
        <Button variant="outline" className="bg-white hidden lg:block text-[#FF6B6B] border-[#FF6B6B]">Login</Button>
      </header>
    </div>
  )
}

export default Nav
