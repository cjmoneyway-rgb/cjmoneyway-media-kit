export type ContentStatus = 'verified' | 'approved' | 'placeholder'

export type LinkItem = { label: string; href: string }
export type CallToAction = { label: string; href?: string; status: ContentStatus; external?: boolean }

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
export type Testimonial = { quote: string; name?: string; role?: string; organization?: string; sourceType: 'host' | 'guest'; status: ContentStatus; image?: string }

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
  purpose: string
  eyebrow: string
  title: string
  description: string
  themes: string[]
  testimonial: Testimonial
  sourceNote: string
  supportingProof?: Metric
  status: 'verified'
}

export type StrategicRelationship = {
  name: string
  organization: string
  roles: string[]
  status: 'approved'
  assetStatus: 'placeholder'
}

export type ConversionPathway = ContentCard & { action: CallToAction }
export type MediaDownload = ContentCard & { action: CallToAction }
