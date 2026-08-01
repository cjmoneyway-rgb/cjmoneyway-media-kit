export type LinkItem = {
  label: string
  href: string
}

export type ContentCard = {
  title: string
  description: string
  eyebrow?: string
  href?: string
  actionLabel?: string
}

export type Metric = {
  value: string
  label: string
}

export type SectionContent = {
  id: string
  eyebrow: string
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  attribution: string
  role: string
}
