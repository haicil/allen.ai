'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BASE_PATH } from '@/lib/basePath'
import styles from './Hero.module.css'

const TITLE_PARTS = ['Allen Ai']
const TITLE = TITLE_PARTS.join('\n')

const SECONDARY_PARTS = ['ECE Student at UT Austin']
const SECONDARY = SECONDARY_PARTS.join('\n')

const SUBTITLE_LINES = [
  'Hardware Engineering',
  'Analog & Mixed-Signal IC Design',
  'Embedded Systems',
  'Firmware Development',
]
const SUBTITLE_FULL = SUBTITLE_LINES.join('\n')

export default function Hero() {
  const heroRef  = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const [navVisible,         setNavVisible]         = useState(false)
  const [displayedTitle,     setDisplayedTitle]     = useState('')
  const [displayedSecondary, setDisplayedSecondary] = useState('')
  const [displayedSubtitle,  setDisplayedSubtitle]  = useState('')
  const [phase, setPhase] = useState<'title' | 'secondary' | 'subtitle' | 'done'>('title')

  // Typing animation
  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const after = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms); timers.push(t)
    }

    let ti = 0, xi = 0, si = 0

    const typeTitle = () => {
      if (cancelled) return
      if (ti < TITLE.length) { ti++; setDisplayedTitle(TITLE.slice(0, ti)); after(typeTitle, 40) }
      else { setPhase('secondary'); after(typeSecondary, 340) }
    }

    const typeSecondary = () => {
      if (cancelled) return
      if (xi < SECONDARY.length) { xi++; setDisplayedSecondary(SECONDARY.slice(0, xi)); after(typeSecondary, 20) }
      else { setPhase('subtitle'); after(typeSub, 300) }
    }

    const typeSub = () => {
      if (cancelled) return
      if (si < SUBTITLE_FULL.length) { si++; setDisplayedSubtitle(SUBTITLE_FULL.slice(0, si)); after(typeSub, 20) }
      else { setPhase('done') }
    }

    after(typeTitle, 500)
    return () => { cancelled = true; timers.forEach(clearTimeout) }
  }, [])

  // Floating nav visibility
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(!entry.isIntersecting), { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Scroll parallax
  useEffect(() => {
    const inner = innerRef.current
    if (!inner) return
    const onScroll = () => { inner.style.transform = `translateY(-${window.scrollY * 0.8}px)` }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const titleSegments     = displayedTitle.split('\n')
  const secondarySegments = displayedSecondary.split('\n')
  const subtitleSegments  = displayedSubtitle.split('\n')

  return (
    <>
      <header className={`${styles.topBar}${phase === 'done' || navVisible ? ' ' + styles.topBarVisible : ''}`}>
        <Link href="/" className={styles.topBarLogo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE_PATH}/images/new_new_new_logo_white.png`} alt="Allen Ai logo" />
        </Link>
        <nav className={styles.topBarNav}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className={styles.hero} ref={heroRef}>
        <div className={styles.inner} ref={innerRef}>
          <div className={styles.content}>
            <div className={styles.textCol}>

              <h1 className={styles.title}>
                {TITLE_PARTS.slice(0, titleSegments.length).map((fullPart, i) => {
                  const isActive = phase === 'title' && i === titleSegments.length - 1
                  return (
                    <span key={fullPart} className={styles.titleLine}>
                      <span className={isActive ? styles.lineArrowActive : styles.lineArrow} aria-hidden>&#10095;</span>
                      {titleSegments[i]}
                      {isActive && <span className={styles.cursor} aria-hidden />}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${BASE_PATH}/images/new_new_new_logo_white.png`}
                        alt=""
                        aria-hidden
                        className={`${styles.titleLogo}${phase !== 'title' ? ' ' + styles.titleLogoVisible : ''}`}
                      />
                    </span>
                  )
                })}
              </h1>

              <p className={styles.secondarySubtitle}>
                {SECONDARY_PARTS.slice(0, secondarySegments.length).map((fullPart, i) => {
                  const isActive = phase === 'secondary' && i === secondarySegments.length - 1
                  return (
                    <span key={fullPart} className={styles.secondaryLine}>
                      <span className={isActive ? styles.lineArrowActive : styles.lineArrow} aria-hidden>&#10095;</span>
                      {secondarySegments[i]}
                      {isActive && <span className={styles.cursor} aria-hidden />}
                    </span>
                  )
                })}
              </p>

              <p className={styles.subtitle}>
                {SUBTITLE_LINES.slice(0, subtitleSegments.length).map((fullLine, i) => {
                  const isActive = phase === 'subtitle' && i === subtitleSegments.length - 1
                  return (
                    <span key={fullLine} className={styles.subtitleLine}>
                      <span className={isActive ? styles.lineArrowActive : styles.lineArrow} aria-hidden>&#10095;</span>
                      {subtitleSegments[i]}
                      {isActive && <span className={styles.cursor} aria-hidden />}
                    </span>
                  )
                })}
              </p>

            </div>
            {/* Portrait – fades in once typing completes */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/images/sensordev-v2-outline.png`}
              alt="Allen Ai portrait"
              className={`${styles.heroImage}${phase === 'done' ? ' ' + styles.heroImageVisible : ''}`}
            />
          </div>
          <button
            type="button"
            className={`${styles.scrollHint}${phase === 'done' ? ' ' + styles.scrollHintVisible : ''}`}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to About section"
          >
            <span className={styles.scrollArrow} />
          </button>
        </div>
      </div>
    </>
  )
}
