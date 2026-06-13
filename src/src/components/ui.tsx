import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll. Call once per page: observes every element with the
 * `.rv` class and adds `.in` when it enters the viewport (runs once each).
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const fmt = (v: number, d: number) =>
  d > 0 ? v.toFixed(d) : Math.round(v).toLocaleString('en-US')

/** Animated stat: counts up once when scrolled into view. Subtle, ease-out. */
export function CountUp({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
}: {
  end: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || done) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        if (reduce) {
          el.textContent = prefix + fmt(end, decimals) + suffix
          setDone(true)
          return
        }
        const t0 = performance.now()
        const step = (t: number) => {
          const p = Math.min((t - t0) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          el.textContent = prefix + fmt(end * ease, decimals) + suffix
          if (p < 1) requestAnimationFrame(step)
          else setDone(true)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, decimals, prefix, suffix, duration, done])

  return (
    <span ref={ref}>
      {prefix}
      {fmt(done ? end : 0, decimals)}
      {suffix}
    </span>
  )
}

/** Right-pointing arrow used in buttons and pathway cards. */
export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
