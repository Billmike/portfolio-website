'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="lg:hidden sticky top-0 z-50 bg-[rgb(4,9,21)]/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Image src="/logo-dark.svg" alt="Logo" width={32} height={32} />
            
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-300 hover:text-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu}></div>
        
        {/* Mobile Menu */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-[rgb(4,9,21)] shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Image src="/logo-dark.svg" alt="Logo" width={32} height={32} />
              <button
                onClick={closeMenu}
                className="p-2 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#mobile-about"
                    className="block text-lg font-medium text-slate-300 hover:text-slate-200 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#mobile-experience"
                    className="block text-lg font-medium text-slate-300 hover:text-slate-200 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#mobile-projects"
                    className="block text-lg font-medium text-slate-300 hover:text-slate-200 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#mobile-contact"
                    className="block text-lg font-medium text-slate-300 hover:text-slate-200 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link 
                    href="/blog"
                    className="block text-lg font-medium text-slate-300 hover:text-slate-200 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
} 