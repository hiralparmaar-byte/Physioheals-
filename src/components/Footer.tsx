import React from 'react';
import { Activity, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white text-lg font-bold">
              <div className="w-7 h-7 rounded-lg bg-teal-800 text-white flex items-center justify-center">
                <Activity className="w-4 h-4 text-teal-300" />
              </div>
              <span className="font-display">PhysioHeals</span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Clinical physiotherapy, specialized women's health biomechanics, and corporate ergonomics solutions designed for modern desk professionals and executive teams by Dr. Hiral Parmar.
            </p>

            <div className="pt-2 text-neutral-300 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a
                  href="mailto:hiral.parmaar@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  hiral.parmaar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Specialized Clinic &amp; Global Virtual Ergonomics Consultations</span>
              </div>
            </div>
          </div>

          {/* Nav Mirror: Clinical Focus */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Clinical Focus
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Women’s Pelvic Health
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Postpartum Core &amp; Spine
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Tech-Neck &amp; Upper Crossed
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Carpal Tunnel &amp; RSI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sacroiliac &amp; Sciatic Care
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Mirror: Corporate Solutions */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Ergonomics &amp; Cases
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#cases" className="hover:text-teal-400 text-white font-medium transition-colors">
                  Clinical Case Studies (#cases)
                </a>
              </li>
              <li>
                <a href="#ergonomics" className="hover:text-white transition-colors">
                  32-Point Workstation Audits
                </a>
              </li>
              <li>
                <a href="#assessment" className="hover:text-white transition-colors">
                  Posture Risk Evaluator
                </a>
              </li>
              <li>
                <a href="#exercises" className="hover:text-white transition-colors">
                  Desk Mobility Sequencer
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Book Corporate Masterclass
                </button>
              </li>
            </ul>
          </div>

          {/* Practice & Compliance */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Accreditation
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Licensed Physical Therapy</span>
              </li>
              <li>Certified Professional Ergonomist</li>
              <li>HSA &amp; FSA Reimbursable</li>
              <li>HIPAA-Compliant Telehealth</li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-3 py-1.5 text-xs font-semibold text-neutral-900 bg-teal-400 hover:bg-teal-300 rounded-md transition-colors cursor-pointer"
                >
                  Consult Dr. Parmar
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-[11px] text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} PhysioHeals. All clinical protocols developed by Dr. Hiral Parmar, PT. Medical content is for informational and therapeutic purposes.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Evidence-Based Practice</span>
            <span aria-hidden="true">·</span>
            <span>Women-Centered Ergonomics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
