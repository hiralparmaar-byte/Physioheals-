import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface BodyZone {
  id: string;
  name: string;
  locationLabel: string;
  commonComplaints: string[];
  deskCulprit: string;
  quickFix: string;
  clinicalSolution: string;
}

export const BodyMapNavigator: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const bodyZones: BodyZone[] = [
    {
      id: 'neck',
      name: 'Cervical Spine & Suboccipitals',
      locationLabel: 'Upper Neck & Base of Skull',
      commonComplaints: [
        'Persistent tension headaches by 3 PM',
        'Inability to comfortably turn head when parking car',
        'Stabbing ache at base of skull radiating to temples',
      ],
      deskCulprit: 'Laptops or screens set 15–20cm below eye level, forcing sustained 30°–45° cervical flexion.',
      quickFix: 'Elevate monitor so top 1/3 of screen is level with eye gaze; execute 8 gentle chin retractions.',
      clinicalSolution: 'Craniocervical flexion motor control training, suboccipital release, and neutral monitor sightline calibration.',
    },
    {
      id: 'shoulders',
      name: 'Upper Trapezius & Scapular Stabilizers',
      locationLabel: 'Shoulder Blades & Upper Back',
      commonComplaints: [
        'Burning ache between shoulder blades during long video calls',
        'Shoulders creeping up toward ears under stress',
        'Loss of thoracic spine rotation and tight chest muscles',
      ],
      deskCulprit: 'Reaching forward for keyboard/mouse without forearm elbow support, placing traps in constant isometric spasm.',
      quickFix: 'Pull keyboard and mouse closer (within 20cm of torso); drop chair armrests to float elbows at 90°.',
      clinicalSolution: 'Serratus anterior activation, pectoralis minor myofascial release, and seated thoracic extension sequencing.',
    },
    {
      id: 'wrists',
      name: 'Carpal Tunnel & Forearm Tendons',
      locationLabel: 'Wrists, Thumbs & Hands',
      commonComplaints: [
        'Nocturnal numbness in thumb, index, and middle fingers',
        'Burning or aching over the outer wrist while using trackpad',
        'Loss of pinch grip strength when opening bottles',
      ],
      deskCulprit: 'Resting wrists directly on hard desk edges with wrist extended backwards >25° and forearm pronated.',
      quickFix: 'Switch to a 57° vertical ergonomic handshake mouse and keep wrists floating flat over keys.',
      clinicalSolution: 'Median nerve sliders/gliders, eccentric forearm tendon loading, and personalized palm support fitting.',
    },
    {
      id: 'lowerback',
      name: 'Lumbar Spine & Sacroiliac Joint',
      locationLabel: 'Lower Back & Pelvis',
      commonComplaints: [
        'Dull, constant ache across beltline after sitting >45 mins',
        'Sharp gluteal sciatica radiating down rear thigh',
        'Difficulty straightening upright when standing up from chair',
      ],
      deskCulprit: 'Slumped sacral sitting with pelvis tilted backwards, flattening the natural inward lumbar curve (lordosis).',
      quickFix: 'Place a firm lumbar roll or folded towel at beltline level; tilt seat pan forward 2–3 degrees.',
      clinicalSolution: 'Core pelvic floor stabilization, piriformis neuro-clearance, and dynamic sit-stand cadence protocol.',
    },
    {
      id: 'pelvis',
      name: 'Pelvic Floor, Coccyx & Diastasis Recti',
      locationLabel: 'Tailbone, Pelvic Base & Abdominal Wall',
      commonComplaints: [
        'Coccyx (tailbone) pressure during executive board meetings',
        'Postpartum core weakness and abdominal coning when sitting',
        'Pregnancy pubic symphysis soreness and sacroiliac instability',
      ],
      deskCulprit: 'Deep executive chairs that press on calf circulation and tuck the tailbone under; chronic breath-holding.',
      quickFix: 'Add a coccyx pressure-relief cutout cushion; shorten seat pan depth so 2–3 fingers fit behind knees.',
      clinicalSolution: 'Specialized women’s pelvic floor down-training/strengthening, intra-abdominal pressure coordination, and maternity desk fit.',
    },
  ];

  const [selectedZone, setSelectedZone] = useState<BodyZone>(bodyZones[0]);

  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            Anatomical Biomechanical Navigator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Where Does Your Desk Hurt?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Select a common pain area to uncover the exact desk ergonomic trigger and clinical physical therapy solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Zone Selector Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {bodyZones.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                      : 'bg-neutral-50/70 hover:bg-neutral-100 border-neutral-200 text-neutral-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">{zone.name}</span>
                    <span
                      className={`text-[11px] font-mono ${
                        isSelected ? 'text-teal-200' : 'text-neutral-500'
                      }`}
                    >
                      {zone.locationLabel}
                    </span>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 text-xs text-neutral-500">
              Can't pinpoint your strain? Multi-area strain is typical of progressive postural decompensation.
            </div>
          </div>

          {/* Breakdown Card (8 cols) */}
          <div className="lg:col-span-8 bg-neutral-50/70 rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                <div>
                  <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                    Biomechanical Deep-Dive
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mt-0.5">
                    {selectedZone.name}
                  </h3>
                </div>
                <span className="text-xs font-medium text-neutral-500">
                  {selectedZone.locationLabel}
                </span>
              </div>

              {/* Common Complaints */}
              <div className="mb-6">
                <div className="text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2.5">
                  Typical Symptoms Reported
                </div>
                <div className="space-y-2">
                  {selectedZone.commonComplaints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid: Culprit & Quick Fix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-neutral-200">
                  <div className="text-xs font-bold text-rose-800 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    <span>The Desk Workstation Culprit</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedZone.deskCulprit}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200">
                  <div className="text-xs font-bold text-teal-800 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>Immediate 60-Second Chair Fix</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedZone.quickFix}
                  </p>
                </div>
              </div>

              {/* Clinical Protocol */}
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80">
                <div className="text-xs font-bold text-teal-950 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-800 shrink-0" />
                  <span>PhysioHeals Clinical Rehabilitation Approach</span>
                </div>
                <p className="text-xs text-teal-900 leading-relaxed">
                  {selectedZone.clinicalSolution}
                </p>
              </div>
            </div>

            {/* Bottom Booking Trigger */}
            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-neutral-500">
                Get a thorough evaluation of your {selectedZone.name.toLowerCase()} and desk setup.
              </span>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <span>Book Targeted Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
