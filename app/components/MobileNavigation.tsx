'use client';

export function MobileNavigation() {

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[rgb(4,9,21)]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-slate-200 font-winky-rough">Kayode</h1>
          <nav>
            <ul className="flex items-center space-x-8">
              <li><a className="text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors" href="#intro">About</a></li>
              <li><a className="text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors" href="#experience">Experience</a></li>
              <li><a className="text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 