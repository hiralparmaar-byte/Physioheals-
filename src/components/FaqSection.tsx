import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are your physiotherapy and ergonomic sessions reimbursable through insurance or FSA/HSA?',
      a: 'Yes. Our clinical physical therapy assessments and rehabilitation sessions are conducted by licensed physical therapists and are fully eligible for Health Savings Accounts (HSA), Flexible Spending Accounts (FSA), and out-of-network health insurance reimbursement. We provide comprehensive itemized superbills with proper ICD-10 diagnostic codes and CPT procedure codes.',
    },
    {
      q: 'How does Women’s Physiotherapy differ from standard physical therapy?',
      a: 'Women possess distinct anatomical, biomechanical, and hormonal profiles that fundamentally affect the musculoskeletal system. Factors such as pelvic angle, lower thoracic ribcage dimensions, hormone-induced ligamentous laxity during pregnancy, diastasis recti, and pelvic floor load distribution require specific biomechanical stabilization. We ensure these female-specific factors are directly integrated into both clinical rehab and desk setup.',
    },
    {
      q: 'How does a Virtual 1:1 Workstation Ergonomic Audit work?',
      a: 'Prior to our 45-minute video consultation, you take 3 specific smartphone photos of your workstation from side, back, and seated typing angles. During the live call, Dr. Parmar analyzes your joint angles using clinical digital goniometry, calculates exact measurement offsets (e.g. raise monitor by 12cm, pull keyboard in by 8cm, adjust lumbar apex), and walks you through immediate physical calibrations on your current equipment.',
    },
    {
      q: 'Can ergonomic and postural interventions truly resolve Carpal Tunnel Syndrome or Sciatica?',
      a: 'In over 85% of mild-to-moderate corporate cases, yes. Compression syndromes like carpal tunnel and desk sciatica frequently stem from sustained static postures, acute wrist extension against hard desk surfaces, and prolonged forearm pronation. Realigning wrist biomechanics, neural sliders/gliders, and pelvic declination removes the mechanical compression before permanent nerve damage occurs.',
    },
    {
      q: 'How can our company organize an On-Site or Virtual Ergonomics Workshop?',
      a: 'We offer turnkey corporate packages tailored for teams from 10 to 500+ employees. Programs include an interactive keynote, live workstation ergonomic demonstrations, individual high-risk employee desk audits, and trained internal "Posture Champions". Simply select "Corporate Inquiry" in the booking form or contact us directly at hiral.parmaar@gmail.com.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Everything You Need to Know
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Clear answers on clinical coverage, ergonomic assessments, and corporate workplace programs.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200 bg-neutral-50/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-sm hover:text-teal-900 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-teal-800 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
