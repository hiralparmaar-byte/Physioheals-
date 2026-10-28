import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, RotateCcw, Check, Clock } from 'lucide-react';

interface RoutineStep {
  title: string;
  targetArea: string;
  durationSeconds: number;
  clinicalInstructions: string;
  cues: string[];
}

export const MicroBreakRoutine: React.FC = () => {
  const steps: RoutineStep[] = [
    {
      title: 'Craniocervical Chin Retraction',
      targetArea: 'Deep Neck Flexors & Suboccipitals',
      durationSeconds: 30,
      clinicalInstructions:
        'Sit upright, look straight ahead. Gently glide your chin backward like making a subtle double-chin, lengthening the back of your skull toward the ceiling. Hold 3 seconds, release slightly, repeat 8 times.',
      cues: ['Do not tilt your head down', 'Feel length at base of skull', 'Release jaw tension'],
    },
    {
      title: 'Seated Thoracic Extension & Cactus Arms',
      targetArea: 'Mid-Back & Pectoralis Minor',
      durationSeconds: 45,
      clinicalInstructions:
        'Interlace fingers behind your head or spread arms in a 90° cactus goalpost. Inhale, gently arch your mid-back over the chair support, and draw your shoulder blades down and together.',
      cues: ['Inhale to expand ribs', 'Keep lower back neutral', 'Open the collarbones'],
    },
    {
      title: 'Median Nerve Neurodynamic Slider',
      targetArea: 'Median Nerve & Forearm Flexors',
      durationSeconds: 30,
      clinicalInstructions:
        'Extend arm to the side at shoulder level, palm up. Extend wrist gently back while tilting your head slightly toward that shoulder (slider). Return wrist to neutral as head straightens. Repeat 10 smooth glides each side.',
      cues: ['Keep movements gentle & fluid', 'Never force into pain or tingling', 'Fluid breathing'],
    },
    {
      title: 'Seated Figure-4 Glute & SI Joint Release',
      targetArea: 'Piriformis, Sciatic Clearance & Pelvis',
      durationSeconds: 45,
      clinicalInstructions:
        'Cross your right ankle over your left knee. Keeping your spine tall and chest lifted, hinge forward from the hips until a gentle stretch is felt deep in the outer right glute. Switch sides at 22 seconds.',
      cues: ['Hinge from hips, do not round low back', 'Keep ankle flexed to protect knee', 'Relax pelvic floor'],
    },
    {
      title: 'Diaphragmatic 360° Reset & Decompression',
      targetArea: 'Core Stabilizers & Nervous System',
      durationSeconds: 30,
      clinicalInstructions:
        'Place hands on lower lateral ribs. Inhale through your nose for 4 seconds, feeling your ribs expand outward into your hands. Exhale slowly through mouth for 6 seconds, dropping shoulders away from ears.',
      cues: ['Ribcage expands 360 degrees', 'Shoulders stay completely relaxed', 'Down-regulates stress response'],
    },
  ];

  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0].durationSeconds);
  const [isActive, setIsActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      if (currentStepIdx < steps.length - 1) {
        const nextIdx = currentStepIdx + 1;
        setCurrentStepIdx(nextIdx);
        setTimeLeft(steps[nextIdx].durationSeconds);
      } else {
        setIsActive(false);
        setCompleted(true);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, currentStepIdx, steps]);

  const handlePlayPause = () => {
    if (completed) {
      setCurrentStepIdx(0);
      setTimeLeft(steps[0].durationSeconds);
      setCompleted(false);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  const handleNext = () => {
    if (currentStepIdx < steps.length - 1) {
      const nextIdx = currentStepIdx + 1;
      setCurrentStepIdx(nextIdx);
      setTimeLeft(steps[nextIdx].durationSeconds);
    } else {
      setIsActive(false);
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setCurrentStepIdx(0);
    setTimeLeft(steps[0].durationSeconds);
    setCompleted(false);
  };

  const currentStep = steps[currentStepIdx];
  const totalRoutineSeconds = steps.reduce((acc, curr) => acc + curr.durationSeconds, 0);

  return (
    <section id="exercises" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Clinical Desk Mobility Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            3-Minute Corporate Posture &amp; Nerve Reset
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Designed by Dr. Hiral Parmar to reverse the postural and neurodynamic strain of prolonged sitting right at your desk without changing out of work attire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Active Exercise Box (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-50/70 rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Step counter and area */}
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                <span className="font-mono font-bold text-teal-800">
                  Step 0{currentStepIdx + 1} of 0{steps.length}
                </span>
                <span className="font-semibold text-neutral-700">
                  Target: {currentStep.targetArea}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {currentStep.title}
              </h3>

              {/* Instructions */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {currentStep.clinicalInstructions}
              </p>

              {/* Form Cues */}
              <div className="p-4 bg-white rounded-xl border border-neutral-200/80 mb-6">
                <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                  Clinical Form Cues
                </div>
                <div className="space-y-1.5 text-xs text-neutral-600">
                  {currentStep.cues.map((cue, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-800 shrink-0" />
                      <span>{cue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timer and Controls */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-mono font-bold tabular-nums text-neutral-900">
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </span>
                <span className="text-xs text-neutral-500">seconds remaining</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayPause}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {isActive ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{completed ? 'Restart Routine' : 'Start Timer'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentStepIdx === steps.length - 1}
                  className="px-3 py-2.5 text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Next Exercise"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 text-neutral-500 hover:text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Routine List Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
                <div className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                  5-Step Micro-Break Sequence
                </div>
                <div className="text-xs text-neutral-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{Math.round(totalRoutineSeconds / 60)} mins total</span>
                </div>
              </div>

              <div className="space-y-2">
                {steps.map((st, sIdx) => {
                  const isCurrent = currentStepIdx === sIdx;
                  const isDone = currentStepIdx > sIdx || completed;

                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        setCurrentStepIdx(sIdx);
                        setTimeLeft(st.durationSeconds);
                        setCompleted(false);
                      }}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? 'border-teal-800 bg-teal-50/70 text-teal-950 font-semibold shadow-xs'
                          : 'border-neutral-100 hover:border-neutral-200 bg-neutral-50/50 text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                            isDone
                              ? 'bg-emerald-600 text-white'
                              : isCurrent
                              ? 'bg-teal-900 text-white'
                              : 'bg-neutral-200 text-neutral-600'
                          }`}
                        >
                          {isDone ? <Check className="w-3 h-3" /> : sIdx + 1}
                        </span>
                        <div>
                          <div className="text-xs font-medium">{st.title}</div>
                          <div className="text-[11px] text-neutral-500">{st.targetArea}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        {st.durationSeconds}s
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note */}
            <div className="mt-6 p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 text-xs text-neutral-600">
              <span className="font-semibold text-neutral-800">Clinical Tip: </span>
              Schedule this routine twice daily—mid-morning (11 AM) and mid-afternoon (3 PM)—to prevent cumulative spinal loading.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
