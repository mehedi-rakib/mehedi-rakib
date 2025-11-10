export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
} as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
} as const;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOutExpo } },
} as const;

export const slideInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
} as const;

export const whileInViewDefaults = { once: true, margin: "-100px" } as const;