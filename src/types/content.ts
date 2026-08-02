export type ContentStatus = 'verified' | 'approved' | 'placeholder'

export type LinkItem = { label: string; href: `#${string}` }
export type CallToAction = { label: string; href?: `#${string}`; status: ContentStatus }

export type SectionContent = {
  id: string
  purpose: string
  eyebrow: string
  title: string
  description: string
  status: ContentStatus
}

export type HeroContent = SectionContent & {
  supportingCopy: string
  identityMarkers: string[]
  imageLabel: string
  ctas: CallToAction[]
}

export type ContentCard = {
  eyebrow?: string
  title: string
  description: string
  status: ContentStatus
  action?: CallToAction
}

export type AuthorityMetric = { value: string; label: string; status: 'verified' }
export type Metric = { value: string; label: string }
export type Testimonial = { quote: string; attribution: string; role: string }

export type EcosystemPlatform = {
  category: string
  name: string
  status: 'approved'
}

export type PodcastRanking = {
  chart: string
  consecutiveDays: number
  dateRange: string
  documentedRunPeak: number
  summary: string
  sequence: { date: string; rank: number }[]
  status: 'verified'
}

export type TestimonialCategory = {
  id: string
  eyebrow: string
  title: string
  description: string
  sources: string[]
  themes: string[]
  quotePlaceholder: string
  status: 'placeholder'
}

export type StrategicRelationship = {
  name: string
  organization: string
  roles: string[]
  status: 'approved'
}

export type ConversionPathway = ContentCard & { action: CallToAction }
