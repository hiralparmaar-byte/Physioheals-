import React from 'react';
import { Check, ArrowRight, Building2, Users, Award, Shield } from 'lucide-react';

interface CorporatePackagesProps {
  onOpenBooking: () => void;
}

export const CorporatePackages: React.FC<CorporatePackagesProps> = ({ onOpenBooking }) => {
  const packages = [
    {
      id: 'pkg-audits',
      name: 'Team Workstation Ergonomics Audits',
      bestFor: 'Targeted support for 10–30 high-strain desk workers or new office rollouts',
      format: 'On-Site or Virtual 1:1 Assessments',
      turnaround: 'Detailed reports within 48 hours',
      features: [
        'Individual 25-minute 1:1 goniometric posture assessment per employee',
        'Chair, monitor arm, keyboard tray, and footrest physical calibration',
        'Personalized 1-page PDF action plan with specific hardware recommendations',
        'Pre- and post-intervention musculoskeletal symptom tracking',
      ],
      popular: false,
    },
    {
      id: 'pkg-masterclass',
      name: 'Women’s Health & Corporate Ergonomics Masterclass',
      bestFor: 'All-hands wellness events, Women’s ERG initiatives & lunch-and-learns',
      format: '60–90 Minute Interactive Keynote (Virtual / In-Person)',
      turnaround: 'Includes recording & digital guide bundle',
      features: [
        'Live keynote by Dr. Hiral Parmar on female biomechanics & screen strain',
        'Interactive live workstation adjustment demonstration with volunteer',
        'Maternity, pregnancy & postpartum desk postural survival strategies',
        'Guided desk micro-break sequencing and neurodynamic stretching guide',
        'Open clinical Q&A for personal desk pain questions',
      ],
      popular: true,
    },
    {
      id: 'pkg-enterprise',
      name: 'Enterprise Ergonomic Transformation',
      bestFor: 'Companies seeking a measurable reduction in health insurance & sick leave claims',
      format: 'Comprehensive 90-Day Enterprise Cohort',
      turnaround: 'Ongoing quarterly monitoring',
      features: [
        'Full office workstation audits (up to 75 workstations included)',
        'Training of 3–5 internal HR / facility team members as "Posture Champions"',
        'Bi-weekly digital micro-mobility reminders integrated into Slack/calendar',
        'Dedicated clinical triage channel for employee pain escalations',
        'Executive ROI & Musculoskeletal Health Index report for C-suite',
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Enterprise &amp; B2B Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Corporate Wellness &amp; Ergonomics Packages
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Scalable, evidence-based programs designed for People Ops, HR Directors, and executive leadership seeking measurable health ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-white border-2 border-teal-800 shadow-md relative'
                  : 'bg-white border border-neutral-200 shadow-xs'
              }`}
            >
              <div>
                {pkg.popular && (
                  <div className="text-xs font-bold text-teal-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-teal-800" />
                    <span>Most Requested by Corporate ERGs</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                  {pkg.bestFor}
                </p>

                {/* Scope Metadata (Zero-Pill Rule) */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-xs space-y-1.5 mb-6">
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="text-neutral-400">Format:</span>
                    <span className="font-semibold text-neutral-800">{pkg.format}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="text-neutral-400">Turnaround:</span>
                    <span className="font-semibold text-neutral-800">{pkg.turnaround}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                    Package Inclusions
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-teal-800 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-teal-900 hover:bg-teal-800 text-white shadow-sm'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                  }`}
                >
                  <span>Request Corporate Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-600">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-teal-800 shrink-0" />
            <div>
              <span className="font-bold text-neutral-900">Custom B2B Scopes &amp; Multi-Office Deployments Available: </span>
              We partner with global technology hubs, legal chambers, and financial brokerages.
            </div>
          </div>
          <a
            href="mailto:hiral.parmaar@gmail.com"
            className="text-teal-900 font-semibold hover:underline whitespace-nowrap"
          >
            Direct Inquiry: hiral.parmaar@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
