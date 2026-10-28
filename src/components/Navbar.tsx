import React, { useState } from 'react';
import { Menu, X, Calendar, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center font-semibold text-base shadow-sm group-hover:bg-teal-700 transition-colors">
            <Activity className="w-4 h-4 text-teal-200" />
          </div>
          <span className="font-display">PhysioHeals</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          <a
            href="#services"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#cases"
            className="hover:text-teal-900 text-neutral-900 font-semibold transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-teal-800"
          >
            Clinical Cases
          </a>
          <a
            href="#symptoms"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
          >
            Symptom Map
          </a>
          <a
            href="#assessment"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
          >
            Posture Test
          </a>
          <a
            href="#packages"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
          >
            Corporate Tiers
          </a>
          <a
            href="#about"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-200" />
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              Services
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 font-semibold text-teal-900"
            >
              Clinical Case Studies (#cases)
            </a>
            <a
              href="#symptoms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              Biomechanical Symptom Map
            </a>
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              Rapid Posture Risk Assessment
            </a>
            <a
              href="#exercises"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              Desk Mobility Routine
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              Corporate B2B Packages
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              About Dr. Hiral Parmar
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-teal-800"
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
