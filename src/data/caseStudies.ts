import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-tech-lead-cervical',
    title: 'Cervical Radiculopathy & Upper Crossed Syndrome in Senior Software Architect',
    category: 'neck-spine',
    categoryLabel: 'Spine & Cervical Care',
    clientProfile: {
      role: 'Senior Software Architect',
      industry: 'Cloud Infrastructure / Tech',
      age: 34,
      deskHours: '10–12 hours / day',
    },
    durationWeeks: 8,
    primarySymptoms: [
      'Sharp burning pain radiating down right arm to C6 thumb distribution',
      'Daily suboccipital tension headaches by 3 PM',
      'Forward head posture angle exceeding 44 degrees',
      'Loss of cervical extension range of motion (limited to 25°)',
    ],
    baselinePainScore: 8,
    finalPainScore: 1,
    keyMetrics: [
      { label: 'VAS Pain Score', before: '8.2 / 10', after: '0.8 / 10' },
      { label: 'Cervical Extension', before: '25° (severely restricted)', after: '68° (anatomical norm)' },
      { label: 'Forward Head Angle', before: '44° forward tilt', after: '14° neutral alignment' },
      { label: 'Uninterrupted Focus Time', before: '45 mins before pain flare', after: '4.5 hours continuous' },
    ],
    summary:
      'A 34-year-old software architect presented with chronic radiating nerve sensations in her right arm and debilitating tension headaches triggered by multi-screen desk setups. Through targeted cervical decompression, deep neck flexor reactivation, and ergonomic workstation repositioning, she achieved near-total symptom resolution in 8 weeks.',
    clinicalDiagnosis:
      'Right C6 cervical radiculopathy secondary to chronic postural loading, severe upper crossed syndrome with hypertonic upper trapezius/levator scapulae and inhibited deep cervical flexors.',
    rootCauses: [
      'Dual-monitor setup placed 18cm below eye level, forcing continuous neck flexion of ~35°',
      'High-stress coding sprints without thoracic extension micro-breaks',
      'Inadequate chair lumbar depth causing slumped sacral sitting and compensatory cervical hyperlordosis',
    ],
    interventions: [
      {
        phase: 'Phase 1 (Weeks 1–2)',
        title: 'Neural Decompression & Pain Desensitization',
        actions: [
          'Gentle median nerve glides and cervical traction mobilizations',
          'Myofascial trigger point release of suboccipitals, pectoralis minor, and upper trapezius',
          'Immediate temporary cessation of overhead loading; heat application protocol',
        ],
      },
      {
        phase: 'Phase 2 (Weeks 3–5)',
        title: 'Deep Stabilizer Reactivation & Workstation Overhaul',
        actions: [
          'Biofeedback-guided craniocervical flexion training (pressure biofeedback 22–28 mmHg)',
          'Lower trapezius and serratus anterior motor control integration',
          'Installed monitor riser elevating top third of screens to exact horizontal eye gaze',
        ],
      },
      {
        phase: 'Phase 3 (Weeks 6–8)',
        title: 'Postural Endurance & Relapse Prevention',
        actions: [
          'Isometric cervical stabilization against resistance bands during seated work simulation',
          'Hourly 90-second thoracic extension micro-break protocol synced to calendar',
          'Dynamic sit-to-stand routine (45 min sit / 15 min stand rhythm)',
        ],
      },
    ],
    ergonomicChanges: [
      'Raised dual monitors by 14 cm to align top bezel with eye level',
      'Reduced reach distance to keyboard from 42 cm to 24 cm with negative-tilt tray',
      'Adjusted task chair lumbar support to L3–L4 lordotic apex and added firm seat wedge',
      'Configured mechanical ergonomic split keyboard to prevent forearm pronation',
    ],
    outcomeSummary:
      'Complete resolution of radicular tingling by week 4; headache frequency reduced from 6 days/week to 0. Follow-up at 6 months showed sustained posture correction and zero recurrence.',
    quote: {
      text: 'I thought chronic neck burning and daily painkillers were just the price of being a principal engineer. Dr. Parmar fixed the root mechanics at both my spine and my desk. I work pain-free for the first time in 4 years.',
      author: 'Priya M. — Senior Software Architect, Enterprise Cloud',
    },
  },
  {
    id: 'case-postpartum-executive',
    title: 'Postpartum Pelvic Girdle & Lumbar Instability in Executive Director',
    category: 'womens-health',
    categoryLabel: "Women's Health & Postpartum",
    clientProfile: {
      role: 'VP Financial Risk & Compliance',
      industry: 'Investment Banking',
      age: 37,
      deskHours: '9–11 hours / day',
    },
    durationWeeks: 10,
    primarySymptoms: [
      'Deep aching sacroiliac (SI) joint pain aggravated after sitting >20 mins',
      'Diastasis recti abdominis with 3.2 cm inter-recti distance (IRD)',
      'Coccyx (tailbone) pressure during executive board meetings',
      'Core instability leading to compensatory lower back spasm',
    ],
    baselinePainScore: 7,
    finalPainScore: 0,
    keyMetrics: [
      { label: 'Inter-Recti Distance (Diastasis)', before: '3.2 cm (separated)', after: '1.1 cm (functional tension restored)' },
      { label: 'Sitting Pain-Free Tolerance', before: '18 minutes', after: '3+ hours without discomfort' },
      { label: 'Pelvic Floor Muscle Grade (Oxford)', before: 'Grade 2/5 (Weak)', after: 'Grade 4+/5 (Strong/Coordinated)' },
      { label: 'VAS Pain on Transition to Stand', before: '7.5 / 10', after: '0 / 10' },
    ],
    summary:
      'Returning to high-pressure banking 5 months postpartum, this VP struggled with severe coccyx and sacroiliac pain that made sitting through client meetings unbearable. We combined specialized pelvic floor/transversus abdominis rehabilitation with postpartum-tailored ergonomic seating.',
    clinicalDiagnosis:
      'Left-dominant sacroiliac joint dysfunction with postpartum pelvic floor hypertonicity, mild pelvic organ prolapse (Stage 1 cystocele), and functional diastasis recti.',
    rootCauses: [
      'Ligamentous laxity persistent postpartum combined with prolonged static sitting in a soft executive armchair',
      'Breath-holding intra-abdominal pressure strategy under workplace stress',
      'Seat pan depth too long (48cm), forcing tailbone tucking and sacral slump',
    ],
    interventions: [
      {
        phase: 'Phase 1 (Weeks 1–3)',
        title: 'Pelvic Floor Down-Training & Coccyx Offloading',
        actions: [
          'Pelvic floor relaxation and diaphragmatic coordination to release pelvic hypertonicity',
          'Coccyx cutout pressure relief cushion implementation',
          'Soft tissue release of piriformis, obturator internus, and lumbar paraspinals',
        ],
      },
      {
        phase: 'Phase 2 (Weeks 4–7)',
        title: 'Deep Core Fascial Tension & Diastasis Closure',
        actions: [
          'Progressive transversus abdominis activation with exhalation cues',
          'Supine-to-standing functional pelvic stabilization drills',
          'Ergonomic adjustment of desk height and transition to active saddle stool for 30% of day',
        ],
      },
      {
        phase: 'Phase 3 (Weeks 8–10)',
        title: 'Loaded Functional Movement & Executive Stamina',
        actions: [
          'Deadbugs, bird-dogs with pelvic control verification',
          'Ergonomic workstation posture audit: footrest placement to maintain 100° hip-to-trunk angle',
          'Lifting mechanics coaching for baby carriage and heavy laptop briefcase',
        ],
      },
    ],
    ergonomicChanges: [
      'Swapped deep executive leather chair for high-end ergonomic mesh chair with adjustable seat depth (shortened by 6 cm)',
      'Added pelvic angle tilt (-3°) to keep pelvis in neutral rather than posterior tilt',
      'Incorporated an ergonomic footrest to eliminate calf pressure and stabilize pelvic floor',
    ],
    outcomeSummary:
      'Inter-recti distance closed to 1.1 cm with excellent fascial tension. Patient completed international business flights and 10-hour workdays with zero pelvic or lower back symptoms.',
    quote: {
      text: 'Dr. Parmar understands corporate women’s bodies like no other therapist. She validated that postpartum healing doesn’t end at 6 weeks, especially when you sit 10 hours a day running a department.',
      author: 'Ananya S. — VP Financial Risk, Tier 1 Investment Bank',
    },
  },
  {
    id: 'case-legal-rsi-carpal',
    title: 'Bilateral Repetitive Strain & Carpal Tunnel Syndrome in Corporate Legal Counsel',
    category: 'rsi-wrist',
    categoryLabel: 'Repetitive Strain & Wrist',
    clientProfile: {
      role: 'Senior Corporate Legal Counsel',
      industry: 'M&A & Corporate Law',
      age: 31,
      deskHours: '11–13 hours / day',
    },
    durationWeeks: 6,
    primarySymptoms: [
      'Nocturnal numbness and pins-and-needles waking patient in thumb, index, and middle fingers',
      'Acute wrist tenderness and burning over flexor retinaculum',
      'Grip strength loss (could not open tight water bottles or hold tablet without aching)',
      'Extreme mouse-hand forearm fatigue during high-volume contract review',
    ],
    baselinePainScore: 7,
    finalPainScore: 0,
    keyMetrics: [
      { label: 'Grip Strength (Dynamometer)', before: '13.5 kg (severely reduced)', after: '26.8 kg (optimal normative range)' },
      { label: 'Phalen’s Test Latency', before: 'Positive at 18 seconds', after: 'Negative at 60 seconds' },
      { label: 'Night Awakening Frequency', before: '3–4 times per night', after: '0 (unbroken sleep)' },
      { label: 'Typing Endurance', before: 'Pain after 30 mins', after: 'Full workday without brace' },
    ],
    summary:
      'Handling intensive M&A due diligence, this 31-year-old attorney faced disabling bilateral carpal tunnel and flexor tendinopathy. She was considering steroid injections. Non-invasive physical therapy and workstation micro-ergonomics reversed her symptoms completely in 6 weeks.',
    clinicalDiagnosis:
      'Moderate bilateral Carpal Tunnel Syndrome (median nerve compression) accompanied by flexor carpi radialis tenosynovitis and shoulder internal rotation posture.',
    rootCauses: [
      'Wrist anchored on hard desk edge with 30° wrist extension while typing on flat laptop keyboard',
      'Traditional flat mouse causing prolonged forearm pronation of 85°',
      'Forward rounded shoulder posture compromising thoracic outlet clearance',
    ],
    interventions: [
      {
        phase: 'Phase 1 (Weeks 1–2)',
        title: 'Nerve Glide Mobilization & Tendon Sheath Calming',
        actions: [
          'Ultrasound and manual transverse friction massage along carpal canal',
          'Median nerve slider and tensioner sequences performed 4x daily',
          'Prescribed night neutral cock-up splints (zero wrist flexion during sleep)',
        ],
      },
      {
        phase: 'Phase 2 (Weeks 3–4)',
        title: 'Biomechanical Ergonomics & Tendon Glides',
        actions: [
          'Transition to 57° vertical ergonomic handshake mouse to neutralize forearm bones',
          'Installed cushioned forearm palm rest to prevent carpal tunnel contact pressure',
          'Eccentric wrist flexor/extensor loading using therapeutic resistance bar',
        ],
      },
      {
        phase: 'Phase 3 (Weeks 5–6)',
        title: 'Scapular Stability & Long-term Endurance',
        actions: [
          'Rhomboid and rotator cuff strengthening to open anterior chest wall',
          'Voice-to-text dictation integration for 25% of routine draft emails',
          'Discontinued night splints; maintained pain-free typing output',
        ],
      },
    ],
    ergonomicChanges: [
      'Introduced Logitech MX Vertical mouse matching her exact hand span (17.5 cm)',
      'Replaced flat keyboard with low-profile split mechanical keyboard with cushioned palm support',
      'Adjusted armrests to precisely match desk height, floating forearms in neutral plane',
    ],
    outcomeSummary:
      'Night awakenings ceased by Day 10. Normal median nerve conduction parameters; avoided invasive steroid injections. Full return to drafting and court filings with zero pain.',
    quote: {
      text: 'I was terrified I would need surgery right in the middle of closing a landmark deal. Dr. Parmar pinpointed exactly how my desk setup was crushing my median nerves. The vertical mouse and nerve glides gave me my career back.',
      author: 'Radhika K. — Partner & Corporate Legal Counsel',
    },
  },
  {
    id: 'case-fintech-corporate-team',
    title: 'Workplace Ergonomic Audit & Postural Intervention for 65-Person FinTech Tech Hub',
    category: 'corporate-team',
    categoryLabel: 'Corporate B2B Ergonomic Program',
    clientProfile: {
      role: 'Engineering & Product Teams (40% Women)',
      industry: 'FinTech / Payments Infrastructure',
      age: 'Team avg: 31',
      deskHours: '45–55 hours / week per employee',
    },
    durationWeeks: 12,
    primarySymptoms: [
      '68% of staff reported weekly neck/shoulder musculoskeletal tension',
      '22% experienced wrist/forearm strain or tingling',
      '14 employee sick days attributed to chronic back and neck episodes in previous quarter',
      'Low adoption of previously purchased adjustable standing desks',
    ],
    baselinePainScore: 6,
    finalPainScore: 1,
    keyMetrics: [
      { label: 'Musculoskeletal Complaint Rate', before: '68% of employees', after: '17% (75% drop)' },
      { label: 'Ergonomic Sick Leave Days', before: '14 days / quarter', after: '0 days in follow-up 6 months' },
      { label: 'Proper Workstation Setup Score', before: '32 / 100 average', after: '94 / 100 average' },
      { label: 'Employee Wellness Rating', before: '3.1 / 5', after: '4.8 / 5' },
    ],
    summary:
      'A rapidly scaling FinTech firm noticed soaring health insurance claims and ergonomic complaints following an aggressive product roadmap. PhysioHeals conducted on-site 32-point workstation audits for all 65 employees, calibrated chairs and monitor arms, and led interactive ergonomic masterclasses.',
    clinicalDiagnosis:
      'Company-wide postural syndrome characterized by widespread thoracic kyphosis, improper monitor sightlines, non-calibrated task chairs, and sedentary stagnation.',
    rootCauses: [
      'Staff sitting in high-end ergonomic chairs configured completely incorrectly (armrests too high, lumbar loose)',
      'Laptops used without external monitors during hot-desking rotations',
      'Lack of knowledge on sit-stand desk cycling protocols',
    ],
    interventions: [
      {
        phase: 'Phase 1 (Week 1–2)',
        title: 'Individual 32-Point Ergonomic Audits',
        actions: [
          'Comprehensive photographic and angular posture analysis for all 65 workstations',
          'Chair personalized fitting: seat pan depth, lumbar height, tension tilt lock',
          'Monitor height adjustment: matched to individual eye height and glasses wearers (bifocals/contacts)',
        ],
      },
      {
        phase: 'Phase 2 (Weeks 3–6)',
        title: 'Corporate Masterclasses & "Posture Champions"',
        actions: [
          'Interactive 60-minute workshop: "Ergonomics for High-Velocity Engineers"',
          'Special breakout session on Women’s Ergonomic Posture: pregnancy desk needs, core support, shoulder geometry',
          'Trained 4 internal HR & Team Leads as certified Posture Champions',
        ],
      },
      {
        phase: 'Phase 3 (Weeks 7–12)',
        title: 'Micro-Break Culture & Software Integration',
        actions: [
          'Integrated 3-minute guided desk mobility routine into company Slack/calendar at 11:30 AM and 3:30 PM',
          'Created self-service workstation adjustment guide for new hires',
          'End-of-program reassessment and individual follow-up for high-risk cases',
        ],
      },
    ],
    ergonomicChanges: [
      'Standardized monitor arm positions across 65 desks',
      'Procured 22 laptop riser kits and external keyboards for hot-desking zones',
      'Distributed ergonomic footrests for shorter employees whose feet dangled off adjusted chairs',
    ],
    outcomeSummary:
      'Estimated $84,000 in saved productivity and reduced absenteeism. Company instituted PhysioHeals onboarding ergonomic audits as a permanent benefit for all new hires.',
    quote: {
      text: 'Dr. Hiral Parmar transformed our engineering floor. Instead of people groaning with stiff necks by 4 PM, our team has vibrant energy. The ROI on our health and culture was instantaneous.',
      author: 'Sneha R. — Head of People & Culture, NeoPay Global',
    },
  },
  {
    id: 'case-prenatal-sciatica',
    title: 'Third-Trimester Desk Ergonomics & SI Joint Dysfunction in Remote Product Lead',
    category: 'womens-health',
    categoryLabel: "Women's Health & Pregnancy",
    clientProfile: {
      role: 'Principal Product Manager',
      industry: 'Consumer Tech',
      age: 33,
      deskHours: '8–10 hours / day (Remote)',
    },
    durationWeeks: 6,
    primarySymptoms: [
      'Severe right-sided sciatica shooting into posterior thigh when seated >25 mins at 29 weeks gestation',
      'Pubic symphysis soreness during roll-over in bed and transitions out of office chair',
      'Difficulty maintaining spinal alignment due to anterior pelvic tilt from growing baby bump',
    ],
    baselinePainScore: 8,
    finalPainScore: 2,
    keyMetrics: [
      { label: 'Sitting Endurance Without Pain', before: '20 minutes', after: '2.5 hours comfortably' },
      { label: 'Active Straight Leg Raise Test', before: 'Grade 4 (severe lag/pain)', after: 'Grade 0 (effortless stability)' },
      { label: 'Pelvic Girdle Pain Questionnaire', before: '68% impairment', after: '12% minimal impairment' },
      { label: 'Daily Energy & Sleep Quality', before: 'Severely interrupted', after: 'Restful 7.5 hrs/night' },
    ],
    summary:
      'At 29 weeks pregnant, this remote product lead experienced debilitating pelvic girdle pain and sciatica that threatened to put her on early medical leave right before an important product launch. Specialized prenatal physical therapy, maternity ergonomic modifications, and pelvic stabilization allowed her to work comfortably right up to maternity leave.',
    clinicalDiagnosis:
      'Pregnancy-Related Pelvic Girdle Pain (PRPGP) with right sacroiliac joint subluxation tendency and piriformis syndrome secondary to relaxin hormone induced hypermobility.',
    rootCauses: [
      'Relaxin-induced pelvic ligament laxity exacerbated by cross-legged sitting posture',
      'Forward shift in center of gravity causing excessive lumbar lordosis and hip flexor tightness',
      'Desk height fixed too high, requiring arm elevation that tightened latissimus dorsi and pulled on thoracolumbar fascia',
    ],
    interventions: [
      {
        phase: 'Phase 1 (Weeks 1–2)',
        title: 'Maternity Joint Stabilization & Pain Relief',
        actions: [
          'Gentle muscle energy technique (MET) for pelvic alignment',
          'Fitting and training for pregnancy sacroiliac support belt during prolonged standing/walking',
          'Soft tissue release of piriformis, adductors, and quadratus lumborum',
        ],
      },
      {
        phase: 'Phase 2 (Weeks 3–4)',
        title: 'Maternity Desk Ergonomics & Dynamic Seating',
        actions: [
          'Integrated birthing ball / ergonomic balance ball chair for alternating 30-min intervals',
          'Pelvic tilt drills and hip circles during zoom meetings with camera off',
          'Elevated feet on angled maternity footrest to unload pubic bone',
        ],
      },
      {
        phase: 'Phase 3 (Weeks 5–6)',
        title: 'Labor Prep & Postural Maintenance',
        actions: [
          'Squat mobility and pelvic floor opening stretches',
          'Breathing mechanics to avoid intra-abdominal strain on diastasis recti',
          'Smooth transition plan for 4 weeks before delivery',
        ],
      },
    ],
    ergonomicChanges: [
      'Swapped rigid chair seat for high-density memory foam wedge with coccyx cutaway',
      'Lowered desk by 4 cm and moved monitor 5 cm closer to prevent leaning forward over the bump',
      'Positioned heating pad behind lumbar spine for morning stiffness',
    ],
    outcomeSummary:
      'Sciatic nerve irritation fully subsided by week 3. Patient successfully launched her product and worked until 38 weeks with full physical comfort.',
    quote: {
      text: 'I was ready to give up and take early disability leave. Dr. Parmar gave me my body back. Her pregnancy ergonomics knowledge is unmatched—she knew exactly what my body needed as it changed week by week.',
      author: 'Meera V. — Principal Product Manager',
    },
  },
  {
    id: 'case-vc-thoracic-headaches',
    title: 'Thoracic Outlet Syndrome & Postural Migraines in Venture Capital Principal',
    category: 'neck-spine',
    categoryLabel: 'Spine & Cervical Care',
    clientProfile: {
      role: 'Principal, Early-Stage VC',
      industry: 'Venture Capital',
      age: 29,
      deskHours: '10–14 hours (travel + desk)',
    },
    durationWeeks: 7,
    primarySymptoms: [
      'Episodic numbness and cool sensation in 4th and 5th fingers after typing on flights/laptops',
      'Intense cervicogenic migraines 3x per week localized around right temple and eye',
      'Inability to hold phone to ear without shoulder fatigue',
      'Craniovertebral angle measured at 36° (significant forward head displacement)',
    ],
    baselinePainScore: 8,
    finalPainScore: 1,
    keyMetrics: [
      { label: 'Migraine Frequency', before: '3–4 episodes / week', after: '< 1 episode / month' },
      { label: 'Roos Stress Test (Thoracic Outlet)', before: 'Positive in 35 seconds', after: 'Negative at 3 minutes' },
      { label: 'Craniovertebral Posture Angle', before: '36° (severe forward shift)', after: '52° (near optimal alignment)' },
      { label: 'Workday Stamina', before: 'Fatigued by 2 PM', after: 'Sustained cognitive clarity all day' },
    ],
    summary:
      'Frequent air travel with heavy laptop backpacks and 12-hour pitch days caused neurogenic thoracic outlet syndrome in this 29-year-old investor. Comprehensive scalene/pectoralis decompression, scapular upward rotation mechanics, and an ultra-portable travel ergonomic kit resolved the syndrome.',
    clinicalDiagnosis:
      'Neurogenic Thoracic Outlet Syndrome (brachial plexus compression in interscalene triangle and costoclavicular space) with cervicogenic migraine overlay.',
    rootCauses: [
      'Constant laptop use with head pitched down 45° during airport lounges and transit',
      'Carrying 8kg single-strap shoulder bag causing clavicular depression and upper rib elevation',
      'Shallow chest breathing during high-stakes investment negotiations',
    ],
    interventions: [
      {
        phase: 'Phase 1 (Weeks 1–2)',
        title: 'Scalene & First Rib Decompression',
        actions: [
          'Manual first rib mobilization and scalene muscle release',
          'Thoracic spine mobilization on foam roller',
          'Eliminated single-strap bag in favor of balanced ergonomic backpack',
        ],
      },
      {
        phase: 'Phase 2 (Weeks 3–5)',
        title: 'Scapular Repositioning & Travel Ergonomics Kit',
        actions: [
          'Prescribed ultra-light folding laptop riser + wireless mini keyboard for all travel',
          'Scapular upward rotation exercises (serratus wall slides, prone Y-raises)',
          'Diaphragmatic lateral ribcage breathing training',
        ],
      },
      {
        phase: 'Phase 3 (Weeks 6–7)',
        title: 'Endurance Under Stress & Flight Protocols',
        actions: [
          'In-flight active cervical retraction and isometric chin tuck routines',
          'Isometric neck strengthening in 4 planes against resistance band',
          'Ergonomic workstation audit for home office dock',
        ],
      },
    ],
    ergonomicChanges: [
      'Roost ultralight folding travel laptop stand implemented for all travel',
      'Swapped single-strap shoulder tote for dual-strap ergonomic backpack with sternum strap',
      'Configured home office monitor with blue light filtration and zero glare position',
    ],
    outcomeSummary:
      'Finger numbness eradicated; migraine frequency plummeted by 85%. Client traveled to 4 cities without a single pain episode.',
    quote: {
      text: 'My migraines were so severe I was taking prescription triptans every week. Dr. Parmar showed me the exact link between my laptop posture, ribcage, and neck nerves. The travel ergonomic kit alone changed my daily life.',
      author: 'Tara D. — Principal, FinTech & AI Fund',
    },
  },
];
