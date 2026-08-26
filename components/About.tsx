import { BASE_PATH } from '@/lib/basePath'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            I am a junior studying Electrical and Computer Engineering at The University of Texas at
            Austin with a strong interest in hardware engineering, analog and mixed-signal IC design,
            embedded systems, and firmware development. Experienced with the hardware development lifecycle,
            such as circuit design, schematic capture, layout, and testing and verification. Enjoys collaborating
            in cross-functional team environments to streamline development and contribute to a positive community.
          </p>
          <p>
            I am currently involved in the UT Austin Chapter of IEEE Robotics and Automation Society (IEEE RAS)
            as its President and the Hardware Lead of VEXU GHOST, one of its subsidiary teams. IEEE RAS is one
            of UT Austin&apos;s largest robotics organizations, and we are dedicated to making robotics and robotics
            education more accessible for all.{' '}
            <a href="https://hcb.hackclub.com/donations/start/austin-ieee-ras">
              Consider donating to support our mission and our projects!
            </a>
          </p>
        </div>
        <div className={styles.imageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/images/portrait_4.jpg`}
            alt="Portrait of Allen Ai"
            className={styles.portrait}
          />
        </div>
      </div>
    </section>
  )
}
