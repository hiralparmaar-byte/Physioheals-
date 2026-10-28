import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Dr. Parmar diagnosed my cervical radiculopathy when three other doctors just gave me muscle relaxants. After her workstation audit and 6 weeks of deep flexor rehab, my arm numbness is completely gone and I code 9 hours a day without pain.',
      author: 'Kavita Sundaram',
      role: 'Staff Infrastructure Engineer',
      company: 'Enterprise Distributed Systems',
      outcome: 'Pain score dropped from 8.5 to 0; eliminated daily ibuprofen',
    },
    {
      quote:
        'Returning to executive banking after my second child was physical agony on my tailbone and pelvis. Hiral customized my desk ergonomics and rebuilt my core stability. I can sit through 3-hour investor meetings without shifting in pain.',
      author: 'Michelle Vance',
      role: 'Managing Director, M&A Advisory',
      company: 'Global Investment Bank',
      outcome: 'Diastasis closed to 1.1cm; full sitting endurance restored',
    },
    {
      quote:
        'We brought PhysioHeals in for an office-wide ergonomic audit of 80 desks. Within three months, our workplace musculoskeletal complaints dropped by 72% and our team’s afternoon energy surged. It was the highest-rated wellness perk we’ve offered.',
      author: 'David Chen',
      role: 'VP People & Operations',
      company: 'FinTech Growth Unicorn',
      outcome: '0 ergonomic lost workdays; 72% reduction in employee stiffness',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Verified Clinical &amp; Corporate Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Real Transformations from the Corporate Floor
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Measurable results across individual corporate leaders and forward-thinking corporate workplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-teal-800/40 mb-4" />
                <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-100 text-xs mb-4">
                  <span className="text-neutral-500 font-medium block text-[11px]">Measured Outcome:</span>
                  <span className="font-semibold text-teal-900">{t.outcome}</span>
                </div>

                <div className="border-t border-neutral-200 pt-3">
                  <div className="text-sm font-bold text-neutral-900">{t.author}</div>
                  <div className="text-xs text-neutral-500 mt-0.5">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
