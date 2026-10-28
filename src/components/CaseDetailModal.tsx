import React from 'react';
import { X, CheckCircle, Activity, Award, Calendar } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseDetailModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  caseStudy,
  onClose,
  onBookConsultation,
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-case-title"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-neutral-200 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              {caseStudy.categoryLabel} · {caseStudy.durationWeeks} Weeks Rehabilitation
            </div>
            <h2 id="modal-case-title" className="text-xl font-bold text-neutral-900 mt-1">
              {caseStudy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8 text-neutral-800 text-sm">
          {/* Patient / Organization Overview Grid */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-xs text-neutral-500 font-medium">Role / Profile</div>
              <div className="text-neutral-900 font-semibold mt-0.5">{caseStudy.clientProfile.role}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Industry</div>
              <div className="text-neutral-900 font-semibold mt-0.5">{caseStudy.clientProfile.industry}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Desk Exposure</div>
              <div className="text-neutral-900 font-semibold mt-0.5">{caseStudy.clientProfile.deskHours}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">VAS Pain Delta</div>
              <div className="text-teal-900 font-bold font-mono mt-0.5">
                {caseStudy.baselinePainScore}/10 → {caseStudy.finalPainScore}/10
              </div>
            </div>
          </div>

          {/* Clinical Presentation & Diagnosis */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-800" />
              Clinical Presentation &amp; Diagnosis
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {caseStudy.summary}
            </p>
            <div className="p-3.5 bg-teal-50/60 border border-teal-200/80 rounded-lg text-teal-950 font-medium text-xs leading-relaxed">
              <span className="font-bold">Formal Diagnosis: </span>
              {caseStudy.clinicalDiagnosis}
            </div>
          </div>

          {/* Quantified Before vs. After Biometric Data */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-800" />
              Quantified Biometric &amp; Postural Changes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyMetrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-lg border border-neutral-200 bg-white">
                  <div className="text-xs text-neutral-500 font-medium mb-1.5">{metric.label}</div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-neutral-400 block text-[11px]">Before:</span>
                      <span className="font-semibold text-rose-700 font-mono">{metric.before}</span>
                    </div>
                    <div className="text-neutral-300 font-mono">→</div>
                    <div className="text-right">
                      <span className="text-neutral-400 block text-[11px]">Outcome:</span>
                      <span className="font-bold text-emerald-800 font-mono">{metric.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Root Causes */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-2">Biomechanical &amp; Ergonomic Root Causes</h4>
            <ul className="space-y-2">
              {caseStudy.rootCauses.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-700 mt-2 shrink-0" />
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phased Interventions */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-3">Multi-Phase Clinical Protocol</h4>
            <div className="space-y-4">
              {caseStudy.interventions.map((phase, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50">
                  <div className="text-xs font-semibold text-teal-900 uppercase tracking-wide">
                    {phase.phase} · {phase.title}
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {phase.actions.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-700 mt-0.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Workstation Modifications Implemented */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-2">Ergonomic Workstation Redesign</h4>
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <ul className="space-y-2 text-xs text-neutral-600">
                {caseStudy.ergonomicChanges.map((change, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-teal-800 font-bold shrink-0">0{idx + 1}.</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Patient Quote */}
          {caseStudy.quote && (
            <div className="p-4 rounded-xl bg-teal-900/5 border border-teal-200/60 text-xs">
              <blockquote className="italic text-neutral-800 text-sm leading-relaxed">
                "{caseStudy.quote.text}"
              </blockquote>
              <div className="mt-2 font-semibold text-teal-900">{caseStudy.quote.author}</div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-500">
            Have similar symptoms? An individualized clinical audit can resolve root causes.
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
                onBookConsultation();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Clinical Evaluation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
