import { useState } from 'react';
import Link from 'next/link'; // Import for navigation in Next.js
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 h-20"> {/* Fixed position */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          {/* Left side - Company Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image className="h-16 w-auto" src="/images/Digiswipelogo.jpg" height={100} width={100} alt="Company Logo" />
            </Link>
          </div>

          {/* Right side - Buttons for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <button className="px-4 hover:bg-green-600 py-2 text-sm text-white font-semibold bg-green-500 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                Dashboard
              </button>
            </Link>

            <Link href="/create-profile">
              <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                Create Your Card
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition">
                Contact Us
              </button>
            </Link>
            <Link href="/admin">
              <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                Admin Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                Dashboard
              </button>
            </Link>

            <Link href="/create-profile">
              <button className="w-full px-4 py-2 text-left text-blue-600 hover:bg-blue-50 block">
                Create Your Card
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full px-4 py-2 text-left text-green-600 hover:bg-green-50 block">
                Contact Us
              </button>
            </Link>
            <Link href="/admin">
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block">
                Admin Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
