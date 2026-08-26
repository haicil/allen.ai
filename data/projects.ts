export type Project = {
  slug: string
  title: string
  year: 2024 | 2025 | 2026
  thumbnail: string
  heroImage: string
  date: string
  summary: string
  tags: string[]
  overview: string[]
  images?: string[]
  video?: string
  link?: { href: string; label: string }
}

export const projects: Project[] = [
  {
    slug: 'customsensor',
    title: 'Configurable Real-Time Multi-Sensing System',
    year: 2026,
    thumbnail: 'customsensor.jpg',
    heroImage: 'customsensor.jpg',
    date: '09/2025 - 06/2026',
    summary: 'Universal multi-sensor robot integration with configurable I2C addressing and real-time data acquisition, improving signal integrity, increasing sensor communication range by 4x, and leading to Semifinalist placement in 2026 VEX AI World Championship.',
    tags: ['KiCad', 'I2C', 'PCB Design', 'Signal Integrity', 'Testing & Validation', 'Firmware', 'C++', 'RP2040', 'RTOS'],
    overview: [
      `The configurable real-time multi-sensing system is a custom sensor system for UT Austin's VEXU GHOST robotics team with universal multi-sensor integration into robots and dynamic configuration of sensor I2C addressing and real-time data acquisition. The purpose of the system is to enable reliable long-distance sensor communication with the robot's system-on-module, increasing wiring distance and mitigating noise coupling, signal interference, and consequential crosstalk and parasitics from harnessing the longer wires. The system consists of multiple base sensor deployment boards that universally deploy different sensor modules, such as color sensor, distance sensor, and IMU, as well as a sensor hub board that connects all of the deployment boards and performs data acquisition on the sensors with a RTOS firmware. The system utilizes a custom hardware architecture of differential I2C as the primary signal transmission protocol through PCA9615 differential I2C bus buffer, board daisy-chaining to reduce the overall physical I2C bus size, and I2C address manipulation through LTC4316 single-I2C address translator to uniquely interface identical I2C peripherals.`,
      `The sensor hub board utilizes an RP2040 and allows for 8 simultaneous I2C bus, 2 hardware I2C bus from the microcontroller and 6 software-programmed I2C bus, meaning theoretically the hub can support the interfacing of more than 400+ I2C sensors. It acts as a communication host, and the Jetson Orin Nano which processes our sensor data to run autonomous operations. I collaborated with other members of the GHOST hardware team to incorporate the differential I2C and daisy-chaining communication architecture into the host board, utilizing PCA9615 for differential pairing and buffering of the I2C buses and an RP2040 to acquire and process the raw sensor data in real-time. The board layout is designed with differential I2C pairs connecting from the docks of the hub to the deployment board using JST GH connectors, single I2C buses to the RP2040 for interfacing, and testing points for easy testing and debugging.`,
      `The sensor deployment board also utilize a PCA9615 to buffer the differential pair buses and convert differential I2C signals to single I2C signals for the sensor device, LTC4316 I2C address translator and a 16-bit DAC with a rotary switch to bit-mask the targeted I2C address and creating a unique address in the cases of interfacing identical sensors, and the sensor devices are deployed as smaller module boards by connected to the deployment board through board-to-board connectors universal across all of the modules. The available sensor modules are color sensor (Renasas ISL2914), distance sensor (STM VL53L4CD), IMU (TDK ICM-20602), and (though not a sensor) I2C GPIO expander (TI PCA9536) for limit switching or device driving applications. The deployment boards can be daisy-chained between each other and be connected to the sensor hub as one continuous differential I2C bus, reducing both wiring length and current return path distance.`,
      `To ensure long-distance functionality, I simulated the system's power distribution simulation in LTspice, replicating a full sensor system with five daisy-chained sensor boards for typical and worst-case test conditions to prevent brownout and ensure limited IR drop and stable operational voltage across the daisy-chained boards.`,
      `The sensor system operates from a data acquisition firmware written in C++ using Pico SDK, FreeRTOS, and ROS 2. As the RP2040 on the sensor hub board is connected to the robot's main processor and SoM, a Jetson Orin Nano, which executes it's processes and operations using ROS 2 with subscription and publishing networks, the firmware initiates a polling of the interfaced sensors once it receives a subscription polling request from the Orin, such that if data is available from a sensor, it is retrieved, packaged, and sent to the Jetson Orin Nano over USB serial for publishing to subscribers from other autonomous subsystems. By sending a polling request, the user can configure the number of polls, the period between each poll, the number of interfaced sensors, the type of each sensor, and the initialization parameters of specific sensors, and once the specified polling terminates, the RP2040 remains idle until the next polling request is received to improve power efficiency. Custom sensor drivers were written for all of the sensors to be compatible with the Pico SDK, and sensor driver APIs are abstracted through individual sensor device objects, which are implemented through class inheritance and factory constructors to keep object functions, attributes, and interactions universal. The firmware also implements a real-time operating system using FreeRTOS to allow for continuous scheduling of new polling requests while the thread is executing the current polling request and protection of shared resources between different tasks through semaphores.`,
      `The sensor system is integrated into the GHOST robot for various autonomous and mechanical functionalities, such as element intake detection, element color indexing, and element position tracking, and has contributed to the team's success in placing as semifinalists in the 2026 VEX AI World Championship. The system has been tested and validated for long-distance communication, signal integrity, and real-time data acquisition, and has proven to be a reliable and efficient solution for multi-sensor integration in robotics applications.`,
    ],
    images: ['customsensor.jpg', 'host.png', 'host-1.png', 'host-2.png', 'host-3.png', 'host-4.png', 'host-5.png', 'host-6.png', 'sensordev-v2-3.png', 'sensordev-v2-4.png', 'sensordev-v2.png', 'sensordev-v2-1.png', 'sensordev-v2-2.png', 'sensordev-v2-5.png', 'sensordev-v2-6.png', 'color.png', 'powersimulation.png', 'powersimulation-1.png', 'powersimulation-2.png', 'powersimulation-3.png', 'powersimulation-4.png', 'powersimulation-5.png', 'powersimulation-6.png', 'sensorfirmware.png', 'sensorfirmware-1.png', 'sensorfirmware-2.png', 'sensorfirmware-3.png',],
    link: { href: 'https://github.com/VEXU-GHOST/ghost_kicad', label: 'Check it out on the VEXU GHOST PCB Github Repository' },
  },
  {
    slug: 'rtc',
    title: 'Offline Real-Time Clock',
    year: 2025,
    thumbnail: 'rtc.png',
    heroImage: 'rtc.png',
    date: '10/2025 - Present',
    summary: 'Supercapacitor-backed RTC board for offline Jetson Orin Nano clock synchronization via I2C, with 3+ months backup runtime.',
    tags: ['KiCad', 'I2C', 'Power Integrity', 'PCB Design'],
    overview: [
      `I designed a real-time clock board with a supercapacitor power source in KiCad to be used for SoM clock synchronization in GHOST, UT Austin's VEX robotics team. GHOST uses Jetson Orin Nanos as SoMs to deploy the team's CV stack and automation, but the Orin's internal clocks are misaligned when not connected to the internet. The real-time clock board aims to address the issue by updating Orin's internal clock via I2C with pre-tuned crystal oscillations.`,
      `The design utilizes a PCF8563 real-time clock, LFXTAL016178 crystal, CE5R5505HF-ZJ 5 F double-layer supercapacitor, and a RB751V-40X_R1_00001 Schottky diode. Throughout the design process, I researched potential double-layer supercapacitor values to achieve a long operating time of the supercapacitor as a backup power source. With the current set of supercapacitor values (5 F, 15 Ohm ESR, 1 uA max current draw from PCF8563), it could operate for 3+ months. I also aimed to minimize the board size as much as possible to allow direct GPIO pin connection to the Orin and reduce surrounding system interference.`,
    ],
    images: ['rtc-4.png', 'rtc-2.png', 'rtc-3.png'],
    link: { href: 'https://github.com/VEXU-GHOST/ghost_kicad', label: 'Check it out on the VEXU GHOST PCB Github Repository' },
  },
  {
    slug: 'chessbot',
    title: 'Chessbot',
    year: 2025,
    thumbnail: 'chessbot.jpg',
    heroImage: 'chessbot.jpg',
    date: '01/2025 - Present',
    summary: 'Embedded LCD interface and MQTT display for an autonomous chess-playing robot with an electromagnet gantry system.',
    tags: ['Embedded C', 'LVGL', 'MQTT', 'Raspberry Pi', 'Robotics'],
    overview: [
      `I developed an embedded interface and display in C for an XPT2046 LCD to be used for Chessbot, a project in the Demobots committee of IEEE RAS. Chessbot is an automated chess-playing robot using a two-axis electromagnet gantry system to move magnetic chess pieces and an MQTT communication architecture that processes the controls and logic of the robot, such as evaluating the current state of the chess pieces and making chess engine API calls. However, the states of chess pieces are enclosed within the robot's game simulation program, and it needed a physical interface to provide the player real-time visualization of the game simulation and control commands over the robot if the game needs to be halted.`,
      `The interface and display was implemented with Little Video Graphics Library, a low-power and low-memory embedded graphics framework, and MQTT topic subscriptions that read from the chessboard state topic and write to the stepper motor topic in order to display the locations of the current chess pieces and allow users to pause the game or home the gantry system back to the origin.`,
      `Throughout the robot's development, I also collaborated with the electrical team in assembling our custom PCBs, as well as the mechanical team in prototyping a chassis for the robot and harnessing the wires and hardware components in the chassis.`,
    ],
    link: { href: 'https://ras.ece.utexas.edu', label: "Check out Chessbot on IEEE RAS's website" },
  },
  {
    slug: 'bevometro',
    title: 'BevoMetro',
    year: 2025,
    thumbnail: 'bevometro.jpg',
    heroImage: 'bevometro.jpg',
    date: '03/2025 - 04/2025',
    summary: 'Autonomous campus tram with IR line-following and obstacle detection — won Community Favorite Award at Operation Ramshorn 2025.',
    tags: ['ESP32', 'Embedded C', 'Sensors', 'Robotics'],
    overview: [
      `I collaborated with a team to co-develop a solution of an autonomous tram that travels around the UT campus as an efficient, convenient, and accessible transit prototype for the annual Operation Ramshorn project competition organized by the Ramshorn Scholars Program. The tram is designed to travel along an established path that loops around the campus, and it detects and stops for obstructions, pedestrians, and its routine pickup and dropoff stations.`,
      `For our demonstrable prototype, I designed the embedded control system and actuation of the tram using an ESP32, motor driver, IR reflectance sensor, sonar sensors, and TT DC motors, programmed the tram navigation and obstacle detection software, and organized subsystem integrations with the assembly of the tram. At the end of development, we compiled our engineering process and development documentation and presented our project to 5+ faculty judges in the 2025 Operation Ramshorn Project Showcase, where our project won the "Community Favorite Award".`,
    ],
    video: 'bevometro.mp4',
  },
  {
    slug: 'keyboard',
    title: 'Custom Mechanical Keyboard',
    year: 2025,
    thumbnail: 'keyboard.jpg',
    heroImage: 'keyboard.jpg',
    date: '02/2025 - 04/2025',
    summary: 'Hand-routed 40% keyboard PCB with 3D-printed case and custom QMK firmware, built from scratch.',
    tags: ['KiCad', 'RP2040', 'QMK', 'SOLIDWORKS'],
    overview: [
      `I designed a custom 40% keyboard from scratch as a personal project with a teammate. The keyboard PCB was designed in KiCad with a 4 x 12 key switch diode matrix connected to GPIO pins of an RP2040 microcontroller. The keyboard case and key switch mounting plate was designed in SOLIDWORKS, 3D printed, and assembled with the PCB with mounting holes and standoffs. The firmware was configured with a custom keymap using QMKFirmware, an open source keyboard firmware and key map configurator, and flashed using UF2 bootloader onto the RP2040.`,
    ],
    images: ['keyboard-4.png', 'keyboard-3.png', 'keyboard-2.png'],
  },
  {
    slug: 'kfc',
    title: 'Kentucky Fried Circuits',
    year: 2024,
    thumbnail: 'kfc.jpg',
    heroImage: 'kfc.jpg',
    date: '09/2024 - 11/2024',
    summary: 'Food-themed autonomous competition robot with Bluetooth controls and sensor-driven navigation — won Best Aesthetic Award at Robotathon 2024.',
    tags: ['ESP32', 'Bluetooth', 'SOLIDWORKS', 'Robotics'],
    overview: [
      `Food-themed robot powered by an ESP32 with wireless Bluetooth controls, small object acquisition mechanism using a servo, and autonomous movements using infrared, color, and proximity sensors. Chassis and frame designed with SOLIDWORKS. Won "Best Aesthetic Award" in the 2024 Robotathon Competition.`,
    ],
    images: ['kfc-2.jpg', 'kfc-3.jpg'],
  },
  {
    slug: 'idci',
    title: 'I.D.C.I',
    year: 2024,
    thumbnail: 'idci.jpg',
    heroImage: 'idci.jpg',
    date: '10/2024',
    summary: 'Smart nurse ID badge with emergency code paging, room display, and haptic feedback — won 2nd place at SEC Makeathon 2024.',
    tags: ['Arduino', 'Embedded', 'Hardware'],
    overview: [
      `An ID card device to improve communication and enhance sensory feedback for nurses. Designed to more easily page emergency codes at hospital rooms and to indicate active codes to stand-by nurses by displaying the specific code and the room in need of assistance, and create vibration using a mini servo to mitigate sensory fatigue. Programmed using an Arduino Nano. Won 2nd place out of 17 competing teams in the 2024 SEC Makeathon.`,
    ],
  },
]
