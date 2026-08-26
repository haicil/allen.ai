export type Experience = {
  title: string
  organization: string
  period: string
  location: string
  summary: string
}

export const experiences: Experience[] = [
  {
    title: 'Undergraduate Teaching Assistant',
    organization: 'UT Austin ECE Department',
    period: 'Aug 2026 – Present',
    location: 'Austin, TX',
    summary: 'Assisting assignment grading and supervision of lab sessions for ECE 402, Intro to Electrical Engineering.',
  },
  {
    title: 'Controls Applications Engineer Intern',
    organization: 'Toshiba International Corporation',
    period: 'Jun 2026 – Aug 2026',
    location: 'Houston, TX',
    summary: 'Architected a configurator tool in Python, JavaScript, and SQL to streamline the quoting of Controls products for industrial motor and VFD applications, establishing 15,000+ product configurations and improving accuracy of quotes by 15%.',
  },
  {
    title: 'Undergraduate Research Assistant',
    organization: 'MERGe Lab (Advisor: Dr. Lillian Chin), UT Austin',
    period: 'Mar 2026 – May 2026',
    location: 'Austin, TX',
    summary: 'Designed embedded pressure transducer exo-brace systems for detection and characterization of body movement and collision in sport and physical activity applications.',
  },
  {
    title: 'Hardware Lead',
    organization: 'VEXU GHOST',
    period: 'Nov 2025 – Present',
    location: 'Austin, TX',
    summary: 'Lead 10+ engineers across 4 concurrent hardware projects in firmware development and PCB design, fabrication, and validation, establishing timelines, organizing documentation, and onboarding new members.',
  },
  {
    title: 'Embedded Systems Engineer',
    organization: 'VEXU GHOST',
    period: 'Sep 2025 – Present',
    location: 'Austin, TX',
    summary: 'Designed sensor PCBs in KiCad and developed RTOS data-streaming firmware to implement a configurable multi-sensor robot subsystems, extending sensor communication range by 4x and improving signal integrity.',
  },
]
