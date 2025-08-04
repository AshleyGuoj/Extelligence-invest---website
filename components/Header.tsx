
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-['Pacifico'] text-blue-600">
              Extelligence Invest
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/legal" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Disclosures
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
