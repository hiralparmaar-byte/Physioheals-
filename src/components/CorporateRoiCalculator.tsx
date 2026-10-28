import React, { useState } from 'react';
import { DollarSign, Users, Clock, Award, ArrowRight } from 'lucide-react';

interface CorporateRoiCalculatorProps {
  onOpenBooking: () => void;
}

export const CorporateRoiCalculator: React.FC<CorporateRoiCalculatorProps> = ({ onOpenBooking }) => {
  const [teamSize, setTeamSize] = useState<number>(45);
  const [avgHourlyComp, setAvgHourlyComp] = useState<number>(65); // $65/hr
  const [complaintRatePct, setComplaintRatePct] = useState<number>(55); // 55%

  // Musculoskeletal research metrics:
  // Workers with chronic desk pain lose ~2.4 hours/week in presenteeism (loss of focus/discomfort)
  // Ergonomic interventions reduce complaints by ~70% and recover ~1.8 hours/week per affected worker
  const affectedEmployees = Math.round((teamSize * complaintRatePct) / 100);
  const annualLostHoursPerEmployee = 2.4 * 46; // 46 working weeks
  const annualCostOfStrain = Math.round(affectedEmployees * annualLostHoursPerEmployee * avgHourlyComp);

  // Projected savings with PhysioHeals 32-point workstation audit & ergonomics workshop
  const projectedAnnualSavings = Math.round(annualCostOfStrain * 0.68);
  const recoveredHours = Math.round(affectedEmployees * 1.8 * 46);

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Inputs (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-2">
              For Corporate &amp; People Operations Leaders
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance mb-4">
              The Real Cost of Desk Strain &amp; The Ergonomic ROI
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Musculoskeletal disorders (MSDs) are the #1 driver of workplace presenteeism, fatigue, and disability claims in tech and corporate knowledge workers. Calculate your team's potential productivity recapture.
            </p>

            {/* Interactive Sliders */}
            <div className="space-y-6 bg-neutral-800/80 p-6 sm:p-8 rounded-2xl border border-neutral-700/80">
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Users className="w-3.5 h-3.5 text-teal-400" />
                    Desk-Bound Team Size
                  </span>
                  <span className="text-teal-300 font-mono text-sm">{teamSize} Employees</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
              </div>

              {/* Slider 2: Average Hourly Cost */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <DollarSign className="w-3.5 h-3.5 text-teal-400" />
                    Average Blended Hourly Compensation
                  </span>
                  <span className="text-teal-300 font-mono text-sm">${avgHourlyComp} / hr</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="180"
                  step="5"
                  value={avgHourlyComp}
                  onChange={(e) => setAvgHourlyComp(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
              </div>

              {/* Slider 3: Estimated Musculoskeletal Complaint Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    Estimated Discomfort / Stiff Neck Rate
                  </span>
                  <span className="text-teal-300 font-mono text-sm">{complaintRatePct}% of team</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="5"
                  value={complaintRatePct}
                  onChange={(e) => setComplaintRatePct(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
                <div className="text-[11px] text-neutral-400 mt-1">
                  Industry average for tech and financial services is ~58% reporting recurring weekly screen tension.
                </div>
              </div>
            </div>
          </div>

          {/* Right Projection Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-800 to-neutral-850 p-6 sm:p-8 rounded-2xl border border-neutral-700 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Annual Impact Projections</span>
              </div>

              <div className="mt-4 pb-6 border-b border-neutral-700">
                <div className="text-xs text-neutral-400">Current Estimated Annual Loss to Strain</div>
                <div className="text-3xl font-extrabold font-mono tabular-nums text-rose-400 mt-1">
                  ${annualCostOfStrain.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  Across {affectedEmployees} employees experiencing daily or weekly pain interruptions.
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <div>
                  <div className="text-xs text-neutral-400">Projected Annual Savings via PhysioHeals</div>
                  <div className="text-4xl font-extrabold font-mono tabular-nums text-emerald-400 mt-1">
                    +${projectedAnnualSavings.toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-700 text-xs text-neutral-300 flex items-center justify-between font-mono">
                  <span>Productive Hours Recaptured:</span>
                  <span className="font-bold text-teal-300">{recoveredHours.toLocaleString()} hrs / yr</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-700">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-semibold text-neutral-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Corporate Team Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
