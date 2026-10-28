import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Intro */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Integrated Clinical Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Specialized Care for the Demands of Corporate Life
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            We bridge orthopaedic clinical rehabilitation with high-performance workplace ergonomics. Every program addresses the root biomechanical stressors of modern desk work.
          </p>
        </div>

        {/* Numbered Services Stack */}
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id === 'corporate-ergonomic-audits' ? 'ergonomics' : undefined}
                className="rounded-2xl border border-neutral-200 p-6 sm:p-10 bg-neutral-50/50 hover:border-neutral-300 transition-colors"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-8' : ''}`}>
                    <div className="rounded-xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100 shadow-xs relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-neutral-800 border border-neutral-200">
                        {service.format}
                      </div>
                    </div>
                  </div>

                  {/* Information Column */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:col-start-1' : ''}`}>
                    {/* Editorial Numbering */}
                    <div className="text-sm font-mono font-bold text-teal-800 mb-1">
                      {service.number}.
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-1.5">
                      {service.title}
                    </h3>

                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                      {service.subtitle}
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables / Scope */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2.5">
                        Clinical Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-teal-700 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <button
                        onClick={onOpenBooking}
                        className="px-4 py-2 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
