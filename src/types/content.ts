export type LinkItem = {
  label: string
  href: `#${string}`
}

export type CallToAction = {
  label: string
  href?: `#${string}`
}

export type ContentCard = {
  title: string
  description: string
  eyebrow?: string
  action?: CallToAction
}

export type Metric = {
  value: string
  label: string
}

export type SectionContent = {
  id: string
  purpose: string
  eyebrow: string
  title: string
  description: string
  ctas?: CallToAction[]
}

export type HeroContent = SectionContent & {
  imageLabel: string
}

export type Testimonial = {
  quote: string
  attribution: string
  role: string
}

export type FAQItem = {
  question: string
  answer: string
}
