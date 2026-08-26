import styles from './Skills.module.css'

const skills = [
  { category: 'Programming',      items: ['Embedded C', 'C++', 'Verilog', 'SystemVerilog', 'Assembly', 'Python', 'HTML', 'JavaScript', 'CSS', 'SQL'] },
  { category: 'Hardware',         items: ['Analog & Digital Circuit Design', 'Signal Simulation & Integrity', 'Power Management', 'PCB Design', 'RTL Design', 'FPGA Development', 'Hardware Testing'] },
  { category: 'Embedded',         items: ['ESP32', 'RP2040', 'STM32', 'MSPM0', 'FreeRTOS', 'ROS 2', 'I2C', 'SPI', 'UART', 'USB', 'Linux', 'Driver Development'] },
  { category: 'EDA & Simulation', items: ['KiCad', 'Altium Designer', 'Xilinx Vivado', 'LTspice'] },
  { category: 'CAD & Mechanical', items: ['SOLIDWORKS', 'Fusion 360', 'OnShape'] },
  { category: 'Tools',            items: ['Git', 'Microsoft Office', 'Notion', 'Miro'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className={styles.list}>
        {skills.map(({ category, items }) => (
          <div key={category} className={styles.card}>
            <p className={styles.category}>{category}</p>
            <div className={styles.chips}>
              {items.map(item => (
                <span key={item} className={styles.chip}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
