import React, { useState } from 'react';
import { ShieldAlert, ArrowRight, RefreshCw, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import { ErgonomicReportModal } from './ErgonomicReportModal';

interface ErgonomicEvaluatorProps {
  onOpenBooking: () => void;
}

export const ErgonomicEvaluator: React.FC<ErgonomicEvaluatorProps> = ({ onOpenBooking }) => {
  const [screenHours, setScreenHours] = useState<number>(3); // 0: <4h, 1: 4-7h, 2: 8-10h, 3: 11h+
  const [monitorPos, setMonitorPos] = useState<number>(1); // 0: eye-level, 1: looking down at laptop, 2: multi-monitors offset
  const [chairType, setChairType] = useState<number>(1); // 0: ergonomic task chair, 1: standard office chair, 2: dining/couch
  const [feetSupport, setFeetSupport] = useState<number>(1); // 0: flat on floor, 1: dangling/tucked under chair, 2: crossed legs
  const [symptoms, setSymptoms] = useState<string[]>([
    'neck-shoulders',
    'lower-back',
  ]);

  const [reportModalOpen, setReportModalOpen] = useState(false);

  const screenHoursOptions = ['< 4 Hours', '4–7 Hours', '8–10 Hours', '11+ Hours'];
  const monitorPosOptions = ['Eye Level (Stand / Arm)', 'Looking Down at Laptop', 'Offset Multi-Monitors'];
  const chairTypeOptions = ['Ergonomic Task Chair (Adjustable)', 'Basic Office Swivel Chair', 'Dining Chair / Sofa / Bed'];
  const feetSupportOptions = ['Flat on Floor / Footrest', 'Dangling / Tucked Under Chair', 'Crossed Legs / Sitting on Foot'];

  const symptomLabels: Record<string, string> = {
    'neck-shoulders': 'Neck & Trapezius Tightness',
    headaches: 'Tension / Occipital Headaches',
    'lower-back': 'Lower Back / Coccyx Aching',
    'wrist-forearm': 'Wrist / Thumb / RSI Tingling',
    'pelvic-si': 'Pelvic Girdle / SI Joint Discomfort',
    'posture-slump': '3 PM Fatigue & Slouching',
  };

  const toggleSymptom = (key: string) => {
    if (symptoms.includes(key)) {
      setSymptoms(symptoms.filter((s) => s !== key));
    } else {
      setSymptoms([...symptoms, key]);
    }
  };

  // Calculate Ergonomic Risk Score (0 - 100)
  const calculateScore = () => {
    let score = 20; // baseline
    score += screenHours * 12; // 0 to 36
    score += monitorPos * 10; // 0 to 20
    score += chairType * 9; // 0 to 18
    score += feetSupport * 7; // 0 to 14
    score += symptoms.length * 6; // up to 30
    return Math.min(100, score);
  };

  const riskScore = calculateScore();

  const getRiskTier = (score: number) => {
    if (score < 40) return { label: 'Low Postural Risk', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' };
    if (score < 70) return { label: 'Moderate Musculoskeletal Strain', color: 'text-amber-800', bg: 'bg-amber-50', border: 'border-amber-200' };
    return { label: 'High Ergonomic Risk Profile', color: 'text-rose-800', bg: 'bg-rose-50', border: 'border-rose-200' };
  };

  const currentTier = getRiskTier(riskScore);

  const getCustomRecommendations = () => {
    const list: string[] = [];
    if (monitorPos === 1) {
      list.push('Elevate your screen with a laptop stand so the top third is aligned with natural horizontal eye level.');
    } else if (monitorPos === 2) {
      list.push('Position your primary monitor directly in front of your midline to eliminate persistent 20° neck torsion.');
    }
    if (chairType >= 1) {
      list.push('Incorporate an external lumbar contour cushion or roll at your L3–L4 lordotic curve to prevent posterior pelvic tilt.');
    }
    if (feetSupport >= 1) {
      list.push('Use a firm footrest (10–15° angle) to keep your knees at 90–100° and unload pressure from your coccyx and pelvic floor.');
    }
    if (symptoms.includes('neck-shoulders')) {
      list.push('Introduce craniocervical flexion (chin-tuck isometrics) every 90 minutes to activate deep stabilizing neck flexors.');
    }
    if (symptoms.includes('wrist-forearm')) {
      list.push('Switch to an ergonomic vertical mouse (57° angle) to eliminate constant forearm pronation and median nerve friction.');
    }
    if (list.length === 0) {
      list.push('Maintain active dynamic sitting intervals with 30-second thoracic extensions every hour.');
    }
    return list;
  };

  const recommendations = getCustomRecommendations();

  return (
    <section id="assessment" className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Interactive Diagnostic Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Rapid Ergonomic &amp; Postural Risk Evaluator
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Assess how your current daily workstation setup and hours are impacting your cervical spine, pelvic alignment, and muscular endurance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs space-y-6">
            {/* Question 1: Screen Hours */}
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2.5">
                1. Daily Screen &amp; Desk Time
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: '< 4 Hours', val: 0 },
                  { label: '4–7 Hours', val: 1 },
                  { label: '8–10 Hours', val: 2 },
                  { label: '11+ Hours', val: 3 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setScreenHours(opt.val)}
                    className={`p-2.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      screenHours === opt.val
                        ? 'border-teal-800 bg-teal-50/70 text-teal-900 font-semibold shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Monitor Position */}
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2.5">
                2. Primary Screen Height &amp; Sightline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Eye Level (Stand / Arm)', val: 0 },
                  { label: 'Looking Down at Laptop', val: 1 },
                  { label: 'Offset Multi-Monitors', val: 2 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setMonitorPos(opt.val)}
                    className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                      monitorPos === opt.val
                        ? 'border-teal-800 bg-teal-50/70 text-teal-900 font-semibold shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Seating & Lumbar Support */}
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2.5">
                3. Chair &amp; Lumbar Support
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Ergonomic Task Chair (Adjustable)', val: 0 },
                  { label: 'Basic Office Swivel Chair', val: 1 },
                  { label: 'Dining Chair / Sofa / Bed', val: 2 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setChairType(opt.val)}
                    className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                      chairType === opt.val
                        ? 'border-teal-800 bg-teal-50/70 text-teal-900 font-semibold shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 4: Feet & Pelvic Grounding */}
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2.5">
                4. Feet &amp; Leg Grounding
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Flat on Floor / Footrest', val: 0 },
                  { label: 'Dangling / Tucked Under Chair', val: 1 },
                  { label: 'Crossed Legs / Sitting on Foot', val: 2 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFeetSupport(opt.val)}
                    className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                      feetSupport === opt.val
                        ? 'border-teal-800 bg-teal-50/70 text-teal-900 font-semibold shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 5: Symptoms Checklist */}
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2.5">
                5. Symptoms in the Past 30 Days (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { key: 'neck-shoulders', label: 'Neck & Trapezius Tightness' },
                  { key: 'headaches', label: 'Tension / Occipital Headaches' },
                  { key: 'lower-back', label: 'Lower Back / Coccyx Aching' },
                  { key: 'wrist-forearm', label: 'Wrist / Thumb / RSI Tingling' },
                  { key: 'pelvic-si', label: 'Pelvic Girdle / SI Joint Discomfort' },
                  { key: 'posture-slump', label: '3 PM Fatigue & Slouching' },
                ].map((item) => {
                  const isChecked = symptoms.includes(item.key);
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleSymptom(item.key)}
                      className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-teal-800 bg-teal-50/70 text-teal-900 font-semibold'
                          : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      <span className="line-clamp-2">{item.label}</span>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-teal-800 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Scorecard (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between sticky top-24">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Biomechanical Risk Score
                </div>
                <button
                  onClick={() => {
                    setScreenHours(1);
                    setMonitorPos(0);
                    setChairType(0);
                    setFeetSupport(0);
                    setSymptoms([]);
                  }}
                  className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Score Display */}
              <div className="text-center pb-6">
                <div className="text-5xl font-black font-mono tabular-nums text-neutral-900 tracking-tight">
                  {riskScore}
                  <span className="text-xl text-neutral-400 font-sans font-normal"> / 100</span>
                </div>

                <div className="mt-3 inline-block">
                  <div
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${currentTier.bg} ${currentTier.color} ${currentTier.border}`}
                  >
                    {currentTier.label}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      riskScore < 40
                        ? 'bg-emerald-600'
                        : riskScore < 70
                        ? 'bg-amber-600'
                        : 'bg-rose-600'
                    }`}
                    style={{ width: `${riskScore}%` }}
                  />
                </div>
              </div>

              {/* Immediate Clinical Insights */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <div className="text-xs font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-teal-800" />
                  <span>Immediate Workstation Correctives</span>
                </div>

                <ul className="space-y-2 text-xs text-neutral-600 leading-relaxed">
                  {recommendations.slice(0, 3).map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-teal-800 font-bold shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-neutral-200 space-y-3">
              <button
                onClick={() => setReportModalOpen(true)}
                className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-600" />
                <span>View &amp; Print Clinical Action Plan</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Clinical Workstation Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Printable Clinical Action Plan Modal */}
      <ErgonomicReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        riskScore={riskScore}
        riskTier={currentTier}
        recommendations={recommendations}
        screenHoursLabel={screenHoursOptions[screenHours]}
        monitorPosLabel={monitorPosOptions[monitorPos]}
        chairTypeLabel={chairTypeOptions[chairType]}
        feetSupportLabel={feetSupportOptions[feetSupport]}
        symptomsList={symptoms.map((k) => symptomLabels[k] || k)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
