import type { ContentCard, FAQItem, HeroContent, LinkItem, Metric, SectionContent, Testimonial } from '../types/content'

export const navigation: LinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#message' },
  { label: 'Topics', href: '#topics' },
  { label: 'Show', href: '#show' },
  { label: 'Books', href: '#books' },
  { label: 'Media', href: '#media' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Booking', href: '#booking' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Journey', href: '#journey' },
]

export const hero: HeroContent = {
  id: 'top',
  purpose: 'Introduce CJ Moneyway, establish the value of his perspective, and direct visitors to the next best action.',
  eyebrow: 'Executive Media Kit',
  title: 'Approved Executive Value Proposition Required',
  description: 'Approved introduction explaining who CJ Moneyway is and the value he brings to audiences is required.',
  imageLabel: 'Approved CJ Portrait Required',
  ctas: [
    { label: 'Explore Speaking Topics', href: '#topics' },
    { label: 'View Media Downloads', href: '#downloads' },
  ],
}

export const metrics: Metric[] = Array.from({ length: 4 }, () => ({
  value: 'Verified Metric Required',
  label: 'Approved Trust Signal Required',
}))

export const sections = {
  about: { id: 'about', purpose: 'Give visitors an approved executive introduction before presenting detailed offerings.', eyebrow: 'About CJ Moneyway', title: 'Approved Biography Required', description: 'Approved Biography Required' },
  message: { id: 'message', purpose: 'Express the approved belief or point of view that connects CJ Moneyway’s work.', eyebrow: 'Signature Message / Brand Philosophy', title: 'Approved Signature Message Required', description: 'Approved Brand Philosophy Required' },
  topics: { id: 'topics', purpose: 'Show the audience outcomes and conversations CJ Moneyway can support.', eyebrow: 'Speaking & Interview Topics', title: 'Approved Topics Headline Required', description: 'Approved benefit-focused topic introduction required.', ctas: [{ label: 'Discuss a Topic', href: '#booking' }] },
  show: { id: 'show', purpose: 'Introduce the show and clarify its approved value to listeners and potential guests.', eyebrow: 'The CJ Moneyway Show™', title: 'Approved Show Headline Required', description: 'Approved Show Description Required', ctas: [{ label: 'Approved Show Link Required' }] },
  books: { id: 'books', purpose: 'Present approved books and publishing work as resources that extend the core message.', eyebrow: 'Books & Publishing', title: 'Approved Publishing Headline Required', description: 'Approved Publishing Overview Required', ctas: [{ label: 'Approved Publishing Link Required' }] },
  media: { id: 'media', purpose: 'Document verified media appearances and provide producers with relevant context.', eyebrow: 'Media Appearances', title: 'Approved Media Appearance Required', description: 'Approved Media Appearance Required' },
  testimonials: { id: 'testimonials', purpose: 'Place approved third-party social proof before the booking decision.', eyebrow: 'Testimonials', title: 'Approved Testimonials Headline Required', description: 'Approved Testimonial Context Required' },
  downloads: { id: 'downloads', purpose: 'Give media professionals one place to access approved, publication-ready assets.', eyebrow: 'Media Downloads', title: 'Approved Media Downloads Headline Required', description: 'Approved asset usage guidance required.' },
  booking: { id: 'booking', purpose: 'Route speaking, interview, and media requests through approved inquiry pathways.', eyebrow: 'Booking & Inquiry Pathways', title: 'Approved Booking Headline Required', description: 'Approved Booking Link Required', ctas: [{ label: 'Approved Booking Link Required' }, { label: 'Review FAQ', href: '#faq' }] },
  faq: { id: 'faq', purpose: 'Resolve common questions and reduce hesitation before an inquiry.', eyebrow: 'FAQ', title: 'Approved FAQ Headline Required', description: 'Approved FAQ Introduction Required' },
  journey: { id: 'journey', purpose: 'Connect visitors to approved CJ Moneyway Media™ platforms for continued engagement.', eyebrow: 'Continue Your Journey™', title: 'Approved Journey Headline Required', description: 'Approved CJ Moneyway Media™ platform introduction required.' },
} satisfies Record<string, SectionContent>

export const topics: ContentCard[] = Array.from({ length: 3 }, (_, index) => ({
  eyebrow: `Topic ${String(index + 1).padStart(2, '0')}`,
  title: 'Approved Topic Title Required',
  description: 'Approved audience benefit and topic description required.',
}))

export const showItems: ContentCard[] = [{ title: 'Approved Show Feature Required', description: 'Approved Show Platform Details Required' }]
export const books: ContentCard[] = [{ title: 'Approved Book Title Required', description: 'Approved Publishing Details Required' }]
export const mediaAppearances: ContentCard[] = Array.from({ length: 3 }, () => ({ title: 'Approved Media Appearance Required', description: 'Approved Media Appearance Required' }))

export const testimonials: Testimonial[] = Array.from({ length: 2 }, () => ({
  quote: 'Approved Testimonial Required', attribution: 'Approved Attribution Required', role: 'Approved Role Required',
}))

export const downloads: ContentCard[] = [
  { title: 'Executive Portraits', description: 'Approved CJ Portrait Required', action: { label: 'Approved Download Asset Required' } },
  { title: 'Executive Biography', description: 'Approved Biography Required', action: { label: 'Approved Download Asset Required' } },
  { title: 'Brand Assets', description: 'Approved Download Asset Required', action: { label: 'Approved Download Asset Required' } },
]

export const faqs: FAQItem[] = Array.from({ length: 3 }, (_, index) => ({ question: `Approved Question ${index + 1} Required`, answer: 'Approved Answer Required' }))

export const journeyPlatforms: ContentCard[] = Array.from({ length: 3 }, () => ({
  title: 'Approved CJ Moneyway Media™ Platform Required', description: 'Approved platform description required.', action: { label: 'Approved Platform Link Required' },
}))
