'use client';

import Image from "next/image";

export function MobileNavigation() {
  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[rgb(4,9,21)]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Image src="/logo-dark.svg" alt="Logo" width={32} height={32} />
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <a 
                  href="#mobile-about"
                  className="text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#mobile-experience"
                  className="text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#mobile-contact"
                  className="text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 