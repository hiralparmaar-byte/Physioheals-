import React from 'react';
import { Award, CheckCircle2, GraduationCap, HeartHandshake } from 'lucide-react';

interface AboutFounderProps {
  onOpenBooking: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm aspect-[4/3] sm:aspect-[4/5] bg-neutral-100">
              <img
                src="/src/assets/images/founder_hiral_parmar_1793166831366.jpg"
                alt="Dr. Hiral Parmar, Lead Physiotherapist and Certified Ergonomist at PhysioHeals"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-lg bg-neutral-900/60 backdrop-blur-md border border-white/10 text-xs">
                <div className="font-bold text-white text-sm">Dr. Hiral Parmar, PT</div>
                <div className="text-teal-200 text-xs">Founder, Lead Clinical Physiotherapist &amp; Ergonomist</div>
              </div>
            </div>
          </div>

          {/* Bio & Clinical Philosophy Column */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
              Clinical Leadership &amp; Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance mb-4">
              "Modern Workplaces Were Not Built for Women’s Biomechanics."
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              Hi, I’m <strong className="text-neutral-900">Dr. Hiral Parmar</strong>. Over the past 12 years of treating professionals in tech, law, and finance, I noticed a consistent, distressing pattern: standard office furniture and generic gym advice regularly fail women.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              Female pelvis anatomy, shoulder girdle geometry, hormonally mediated ligament laxity during pregnancy, and postpartum core dynamics require an entirely different clinical lens. At <span className="font-semibold text-neutral-900">PhysioHeals</span>, we unite rigorous orthopaedic rehabilitation with precision desk ergonomics so you never have to choose between your career ambitions and physical vitality.
            </p>

            {/* Credential Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-teal-800 mt-1 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-neutral-900">Advanced Orthopaedic &amp; Sports PT</div>
                  <div className="text-neutral-500 mt-0.5">Specialized Musculoskeletal Rehabilitation</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex items-start gap-3">
                <Award className="w-4 h-4 text-teal-800 mt-1 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-neutral-900">Certified Professional Ergonomist</div>
                  <div className="text-neutral-500 mt-0.5">Office &amp; Industrial Biomechanical Design</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex items-start gap-3">
                <HeartHandshake className="w-4 h-4 text-teal-800 mt-1 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-neutral-900">Women’s Health Pelvic Care</div>
                  <div className="text-neutral-500 mt-0.5">Prenatal, Postpartum &amp; Core Integrity</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 mt-1 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-neutral-900">1,400+ Successful Case Audits</div>
                  <div className="text-neutral-500 mt-0.5">Zero-Surgery Ergonomic Interventions</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Schedule an Assessment with Dr. Parmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
