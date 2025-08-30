import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[rgb(4,9,21)] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Kayode Ayelegun. All rights reserved.
          </div>
          
          <nav className="flex space-x-6">
            <Link 
              href="/privacy-policy"
              className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="mailto:ayelegun.kayode@gmail.com"
              className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
} 