'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Extelligence
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/investments" className="text-gray-700 hover:text-primary-600 transition-colors">
              Investments
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Home
              </Link>
              <Link href="/investments" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Investments
              </Link>
              <Link href="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Portfolio
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 