import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'womens-physiotherapy',
    number: '01',
    title: "Women's Specialized Physiotherapy",
    subtitle: 'Pelvic health, core integrity & postpartum rehabilitation',
    description:
      'Tailored clinical physiotherapy addressing the unique structural, hormonal, and postural needs of women. From pelvic floor rehabilitation and diastasis recti resolution to pregnancy-related joint laxity, SI joint dysfunction, and menopause bone health.',
    idealFor: [
      'Postpartum desk workers returning after maternity leave',
      'Expectant mothers experiencing sciatica, pubic symphysis, or back pain',
      'Corporate women suffering from pelvic floor dysfunction or tailbone pressure',
      'Professionals managing core instability and diastasis recti',
    ],
    deliverables: [
      'Comprehensive pelvic floor & abdominal wall ultrasound/palpatory assessment',
      'Safe, progressive core & pelvic stabilization roadmap',
      'Maternity and postpartum seated workstation modifications',
      'Targeted manual therapy, myofascial release, and breath mechanics',
    ],
    format: 'Clinic & Virtual',
    image: '/src/assets/images/womens_physiotherapy_care_1793166830040.jpg',
  },
  {
    id: 'corporate-ergonomic-audits',
    number: '02',
    title: 'Workstation Ergonomics Audits',
    subtitle: '32-point physical & virtual workstation biomechanical audit',
    description:
      'Comprehensive ergonomic evaluations for corporate offices and home work environments. We scientifically align chair height, lumbar contour, monitor distances, keyboard trays, and lighting to match your anthropometric measurements and eliminate physical strain.',
    idealFor: [
      'Professionals working 8–14 hours at desks, monitors, and laptops',
      'Remote and hybrid teams with unoptimized home office setups',
      'Corporate executives experiencing chronic fatigue and posture breakdown',
      'Individuals with recurring neck, shoulder, or wrist symptoms',
    ],
    deliverables: [
      'Personalized 32-point ergonomic assessment report with photographic analysis',
      'Exact measurement calibrations for chair, desk, monitor, and peripherals',
      'Specific equipment recommendations (chairs, monitor arms, vertical mice)',
      'Customized 15-minute desk mobility and micro-break routine',
    ],
    format: 'On-Site & Virtual',
    image: '/src/assets/images/ergonomics_workstation_audit_1793166828967.jpg',
  },
  {
    id: 'chronic-strain-rehab',
    number: '03',
    title: 'Repetitive Strain & Spine Rehabilitation',
    subtitle: 'Evidence-based treatment for tech-neck, carpal tunnel & sciatica',
    description:
      'Specialized orthopaedic physical therapy targeting the modern desk worker’s epidemic: upper crossed syndrome, forward head posture, cervical radiculopathy, carpal tunnel syndrome, and chronic lumbar disc irritation.',
    idealFor: [
      'Software engineers, analysts, lawyers, and writers with screen strain',
      'Professionals waking with hand numbness or pins-and-needles',
      'Desk workers with persistent occipital tension headaches',
      'Anyone diagnosed with sciatica, disc bulge, or shoulder impingement',
    ],
    deliverables: [
      'Deep craniocervical flexion & scapular stabilizer motor re-education',
      'Neural mobilization (median, ulnar, and radial nerve glides)',
      'Targeted trigger point dry needling / manual soft tissue therapy',
      'Custom exercise portal with HD video demonstrations and tracking',
    ],
    format: 'Clinic & Virtual',
    image: '/src/assets/images/hero_physio_ergonomics_1793166828301.jpg',
  },
  {
    id: 'corporate-wellness-masterclasses',
    number: '04',
    title: 'Corporate Ergonomics Masterclasses',
    subtitle: 'Interactive B2B workshops, audits & health programs for teams',
    description:
      'High-impact, CME/CEU-informed corporate ergonomics workshops designed for tech, finance, legal, and creative enterprises. We turn sedentary workplaces into active, energized environments with demonstrable drops in absenteeism and healthcare costs.',
    idealFor: [
      'HR Directors, People Operations, and Chief Happiness Officers',
      'Corporate women’s employee resource groups (ERGs)',
      'High-velocity startups and established enterprise departments',
      'Companies aiming to cut musculoskeletal health insurance claims',
    ],
    deliverables: [
      '60–90 minute interactive keynote & live workstation adjustment demo',
      'Specialized breakout: Women’s Ergonomics, Core Health & Desk Biomechanics',
      'Internal "Posture Champion" training for HR and facility managers',
      'Enterprise ROI & employee health improvement metrics report',
    ],
    format: 'Corporate Masterclass',
    image: '/src/assets/images/corporate_workshop_team_1793166831002.jpg',
  },
];
