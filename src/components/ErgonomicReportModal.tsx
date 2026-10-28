import React from 'react';
import { X, Printer, CheckCircle, Activity, ShieldCheck, Mail } from 'lucide-react';

interface ErgonomicReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  riskScore: number;
  riskTier: { label: string; color: string; bg: string };
  recommendations: string[];
  screenHoursLabel: string;
  monitorPosLabel: string;
  chairTypeLabel: string;
  feetSupportLabel: string;
  symptomsList: string[];
  onOpenBooking: () => void;
}

export const ErgonomicReportModal: React.FC<ErgonomicReportModalProps> = ({
  isOpen,
  onClose,
  riskScore,
  riskTier,
  recommendations,
  screenHoursLabel,
  monitorPosLabel,
  chairTypeLabel,
  feetSupportLabel,
  symptomsList,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in duration-200 print:border-none print:shadow-none print:max-w-full"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Controls (Hidden during print) */}
        <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-teal-800" />
            <span className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
              Clinical Ergonomic Action Plan
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clinical Document Letterhead */}
        <div className="p-8 space-y-6 text-neutral-800 text-xs sm:text-sm">
          {/* Practice Letterhead */}
          <div className="flex items-start justify-between pb-6 border-b border-neutral-200">
            <div>
              <div className="text-xl font-bold tracking-tight text-neutral-900 font-display">
                PhysioHeals Clinical Practice
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Specialized Women’s Physiotherapy &amp; Corporate Biomechanics
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Dr. Hiral Parmar, PT · Certified Professional Ergonomist (CPE) · hiral.parmaar@gmail.com
              </div>
            </div>
            <div className="text-right text-xs text-neutral-500 font-mono">
              <div>Date: {currentDate}</div>
              <div>Report ID: #EVAL-{Math.floor(10000 + Math.random() * 90000)}</div>
            </div>
          </div>

          {/* Assessment Summary Grid */}
          <div>
            <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              Workstation Assessment Summary
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-neutral-500 block">Daily Screen Time:</span>
                <span className="font-semibold text-neutral-800">{screenHoursLabel}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Monitor Sightline:</span>
                <span className="font-semibold text-neutral-800">{monitorPosLabel}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Seating Support:</span>
                <span className="font-semibold text-neutral-800">{chairTypeLabel}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Lower Extremity Grounding:</span>
                <span className="font-semibold text-neutral-800">{feetSupportLabel}</span>
              </div>
            </div>
          </div>

          {/* Calculated Score */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex items-center justify-between">
            <div>
              <div className="text-xs text-neutral-500">Calculated Ergonomic Strain Index</div>
              <div className="text-2xl font-bold font-mono text-neutral-900 mt-0.5">
                {riskScore} / 100
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                {riskTier.label}
              </span>
            </div>
          </div>

          {/* Reported Symptoms */}
          {symptomsList.length > 0 && (
            <div>
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
                Active Symptom Profile
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {symptomsList.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-rose-50 text-rose-800 rounded-md border border-rose-200 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Prescribed Workstation Adjustments */}
          <div>
            <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              Prescribed Workstation Modifications
            </div>
            <div className="space-y-2">
              {recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-neutral-200 bg-neutral-50/50 flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-teal-800 mt-0.5 shrink-0" />
                  <span className="text-xs text-neutral-700 leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Sign-Off */}
          <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-800" />
              <span>Evidence-Based Biomechanical Evaluation</span>
            </div>
            <div className="font-medium text-neutral-800">
              Dr. Hiral Parmar, PT, CPE
            </div>
          </div>
        </div>

        {/* Modal Actions (Hidden during print) */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-neutral-500">
            Ready to implement these changes with 1:1 professional guidance?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
            >
              Book Clinical Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
