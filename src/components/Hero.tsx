import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCases }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed text kicker */}
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-4">
              Clinical Physical Therapy & Ergonomic Science
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] text-balance mb-6">
              Women’s Physiotherapy &amp; Ergonomics for Corporate Professionals
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
              Eliminate chronic tech-neck, repetitive strain, and postpartum pelvic or spinal instability. We bring clinical orthopaedic physical therapy directly into modern corporate workflows for sustained pain-free performance.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-neutral-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <span>Specialized female biomechanics & pelvic health</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <span>32-Point workstation ergonomic calibrations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <span>Measurable pain relief within 3 to 6 weeks</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <span>In-clinic & virtual tele-rehab for executive schedules</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 text-sm font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCases}
                className="px-5 py-3 text-sm font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Clinical Cases</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Sub-note */}
            <div className="mt-4 text-xs text-neutral-500 flex items-center gap-2">
              <span>Led by Dr. Hiral Parmar, PT</span>
              <span aria-hidden="true">·</span>
              <span>Certified Professional Ergonomist</span>
              <span aria-hidden="true">·</span>
              <span>Covered by major corporate wellness & FSA/HSA</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[340px] lg:min-h-[460px] rounded-2xl overflow-hidden relative border border-neutral-200 shadow-sm bg-neutral-100">
              <img
                src="/src/assets/images/hero_physio_ergonomics_1793166828301.jpg"
                alt="Dr. Hiral Parmar providing ergonomic postural assessment and spinal guidance to a corporate professional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-lg bg-neutral-900/60 backdrop-blur-md border border-white/10 text-xs">
                <div className="font-semibold text-teal-200 text-sm mb-0.5">Clinical Ergonomics in Action</div>
                <div className="text-neutral-200 line-clamp-2">
                  Comprehensive craniovertebral spinal alignment and desk height calibration during a live corporate assessment.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & KPI Strip Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-neutral-900">
              94.6%
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Sustained Pain Reduction
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              Measured at 6-week follow-up
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-neutral-900">
              1,420+
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Workstations Audited
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              Tech, legal & finance enterprises
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-neutral-900">
              0 Days
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Ergonomic Sick Leave
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              Across 90-day corporate cohorts
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-neutral-900">
              4.9 / 5.0
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Patient Satisfaction
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              Over 650 verified clinical reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
