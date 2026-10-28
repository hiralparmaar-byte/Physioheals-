import React, { useState } from 'react';
import { ArrowUpRight, TrendingDown, Clock, Laptop } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseCategory, CaseStudy } from '../types';
import { CaseDetailModal } from './CaseDetailModal';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<CaseCategory>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories: { key: CaseCategory; label: string }[] = [
    { key: 'all', label: 'All Cases' },
    { key: 'neck-spine', label: 'Cervical & Spine' },
    { key: 'womens-health', label: "Women's Health & Postpartum" },
    { key: 'rsi-wrist', label: 'RSI & Carpal Tunnel' },
    { key: 'corporate-team', label: 'Corporate B2B Audits' },
  ];

  const filteredCases =
    activeCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeCategory);

  return (
    <section id="cases" className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
              Clinical Evidence &amp; Quantified Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
              Verified Clinical Case Studies
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 max-w-2xl">
              Real biomechanical diagnoses, workstation interventions, and measurable recovery data across corporate professionals and high-performance teams.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/80 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((cs) => {
            const painReductionPercent = Math.round(
              ((cs.baselinePainScore - cs.finalPainScore) / cs.baselinePainScore) * 100
            );

            return (
              <div
                key={cs.id}
                className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-teal-800/40 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Clean Unboxed Metadata Line (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span className="font-semibold text-teal-800">{cs.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      {cs.durationWeeks} weeks
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Laptop className="w-3 h-3 text-neutral-400" />
                      {cs.clientProfile.deskHours}
                    </span>
                  </div>

                  {/* Primary Title */}
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-teal-900 transition-colors leading-snug mb-2">
                    {cs.title}
                  </h3>

                  {/* Role / Context */}
                  <div className="text-xs font-medium text-neutral-600 mb-4">
                    {cs.clientProfile.role} — {cs.clientProfile.industry}
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-5">
                    {cs.summary}
                  </p>

                  {/* Quantified Pain & Metric Banner */}
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 mb-5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-neutral-500 font-medium">VAS Pain Score</span>
                      <div className="flex items-center gap-1 text-teal-800 font-semibold">
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>-{painReductionPercent}% relief</span>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-[11px] text-neutral-400 block font-sans">Baseline</span>
                        <span className="text-base font-bold text-rose-700 tabular-nums">
                          {cs.baselinePainScore}.0 / 10
                        </span>
                      </div>
                      <div className="text-neutral-300">→</div>
                      <div className="text-right">
                        <span className="text-[11px] text-neutral-400 block font-sans">Resolved</span>
                        <span className="text-base font-bold text-emerald-700 tabular-nums">
                          {cs.finalPainScore}.0 / 10
                        </span>
                      </div>
                    </div>

                    {/* Featured Primary Biometric */}
                    {cs.keyMetrics[0] && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px]">
                        <span className="text-neutral-500">{cs.keyMetrics[0].label}:</span>
                        <span className="font-semibold text-neutral-800 font-mono">
                          {cs.keyMetrics[0].after}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCase(cs)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Biomechanical Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-lg font-bold text-neutral-900">
              Experiencing similar symptoms at your desk?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
              Don’t normalize daily pain. Get an individualized clinical assessment of your spinal biomechanics, muscular balance, and workspace setup.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
          >
            Book Your Clinical Evaluation
          </button>
        </div>
      </div>

      {/* Deep Case Study Detail Modal */}
      <CaseDetailModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onBookConsultation={onOpenBooking}
      />
    </section>
  );
};
