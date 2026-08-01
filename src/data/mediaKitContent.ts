import type { ContentCard, LinkItem, Metric, SectionContent, Testimonial } from '../types/content'

export const navigation: LinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Topics', href: '#topics' },
  { label: 'Media', href: '#media' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Booking', href: '#booking' },
]

export const hero = {
  eyebrow: 'Executive Media Kit',
  title: 'Approved Executive Headline Required',
  description: 'Approved Executive Introduction Required',
  imageLabel: 'Approved CJ Portrait Required',
}

export const metrics: Metric[] = Array.from({ length: 4 }, (_, index) => ({
  value: 'Verified Metric Required',
  label: `Approved Metric Label ${index + 1} Required`,
}))

export const sections: Record<string, SectionContent> = {
  about: { id: 'about', eyebrow: 'About CJ', title: 'Approved Biography Required', description: 'Approved Biography Required' },
  message: { id: 'message', eyebrow: 'Signature Message', title: 'Approved Signature Message Required', description: 'Approved Signature Message Required' },
  topics: { id: 'topics', eyebrow: 'Speaking & Interviews', title: 'Approved Topic Details Required', description: 'Approved Topic Introduction Required' },
  show: { id: 'show', eyebrow: 'The CJ Moneyway Show™', title: 'Approved Show Description Required', description: 'Approved Platform Details Required' },
  books: { id: 'books', eyebrow: 'Books & Publishing', title: 'Approved Publishing Details Required', description: 'Approved Book Information Required' },
  media: { id: 'media', eyebrow: 'Media Appearances', title: 'Approved Media Appearances Required', description: 'Approved Appearance Details Required' },
  testimonials: { id: 'testimonials', eyebrow: 'Testimonials', title: 'Approved Testimonials Required', description: 'Approved Testimonial Context Required' },
  downloads: { id: 'downloads', eyebrow: 'Media Downloads', title: 'Approved Media Assets Required', description: 'Approved Usage Guidance Required' },
  booking: { id: 'booking', eyebrow: 'Booking & Inquiry Pathways', title: 'Approved Booking Details Required', description: 'Approved Inquiry Instructions Required' },
  faq: { id: 'faq', eyebrow: 'FAQ', title: 'Approved Frequently Asked Questions Required', description: 'Approved FAQ Introduction Required' },
  journey: { id: 'journey', eyebrow: 'Continue Your Journey™', title: 'Approved Call to Action Required', description: 'Approved Journey Details Required' },
}

export const topics: ContentCard[] = Array.from({ length: 3 }, (_, index) => ({
  eyebrow: `Topic ${String(index + 1).padStart(2, '0')}`,
  title: 'Approved Topic Title Required',
  description: 'Approved Topic Description Required',
}))

export const platforms: ContentCard[] = [
  { eyebrow: 'Show', title: 'Approved Show Platform Required', description: 'Approved Platform Details Required' },
  { eyebrow: 'Publishing', title: 'Approved Book Title Required', description: 'Approved Publishing Details Required' },
  { eyebrow: 'Media', title: 'Approved Appearance Required', description: 'Approved Media Details Required' },
]

export const testimonials: Testimonial[] = Array.from({ length: 2 }, () => ({
  quote: 'Approved Testimonial Required',
  attribution: 'Approved Attribution Required',
  role: 'Approved Role Required',
}))

export const downloads: ContentCard[] = [
  { title: 'Executive Portraits', description: 'Approved CJ Portrait Required', actionLabel: 'Asset Required' },
  { title: 'Approved Biography', description: 'Approved Biography Required', actionLabel: 'Asset Required' },
  { title: 'Brand Assets', description: 'Approved Brand Assets Required', actionLabel: 'Asset Required' },
]

export const faqs = Array.from({ length: 3 }, (_, index) => ({
  question: `Approved Question ${index + 1} Required`,
  answer: 'Approved Answer Required',
}))
