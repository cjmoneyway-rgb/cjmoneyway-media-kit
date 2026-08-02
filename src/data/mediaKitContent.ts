import type { AuthorityMetric, ContentCard, ConversionPathway, EcosystemPlatform, HeroContent, LinkItem, PodcastRanking, SectionContent, StrategicRelationship, TestimonialCategory } from '../types/content'

export const navigation: LinkItem[] = [
  { label: 'About', href: '#hero' }, { label: 'Philosophy', href: '#represents' },
  { label: 'Work', href: '#work' }, { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Proof', href: '#authority' }, { label: 'Show', href: '#show' },
  { label: 'Relationships', href: '#relationships' }, { label: 'Next Step', href: '#next-step' },
]

export const hero: HeroContent = {
  id: 'hero', purpose: "Immediately establish CJ's identity, positioning, and direction.", eyebrow: 'CJ Moneyway',
  title: 'Built For Purpose. Designed for Impact. Built to Last.',
  description: 'CJ Moneyway is the Founder & CEO of CJ Moneyway Media™, host of The CJ Moneyway Show™, author, speaker, and builder working across leadership, media, relationships, and practical AI.',
  supportingCopy: 'CJ Moneyway helps leaders, creators, entrepreneurs, organizations, and communities combine timeless principles, meaningful relationships, and modern tools to build transformational results.',
  identityMarkers: ['Founder & CEO — CJ Moneyway Media™', 'Host — The CJ Moneyway Show™', 'Author', 'Speaker', 'Builder of Mission Control OS™'],
  imageLabel: 'Approved CJ Portrait Required', status: 'approved',
  ctas: [{ label: 'Work With CJ', href: '#next-step', status: 'approved' }, { label: 'Explore CJ Moneyway Media™', href: '#ecosystem', status: 'approved' }],
}

export const sections = {
  represents: { id: 'represents', purpose: 'Answer what CJ Moneyway stands for and establish the foundation beneath the enterprise.', eyebrow: 'What CJ Represents', title: 'Built For Purpose™', description: "Meaningful success is built Brick by Brick™. CJ's philosophy combines timeless principles with modern tools to help people and organizations build with clarity, discipline, purpose, and long-term impact.", status: 'approved' },
  work: { id: 'work', purpose: 'Show what CJ does through connected areas of work.', eyebrow: 'What CJ Does', title: 'One purpose. Multiple pathways to practical transformation.', description: 'Each area of work extends the same purpose-led enterprise through conversation, education, publishing, experiences, and strategic collaboration.', status: 'approved' },
  ecosystem: { id: 'ecosystem', purpose: 'Show what CJ has built and how each platform connects to the master enterprise.', eyebrow: 'The CJ Moneyway Media™ Ecosystem', title: 'A connected enterprise built for lasting impact.', description: 'CJ Moneyway Media™ is the master enterprise connecting media, speaking, publishing, relationships, education, innovation, and systems. The CJ Moneyway Show™ is one flagship platform within this broader ecosystem.', status: 'approved' },
  authority: { id: 'authority', purpose: 'Establish concise, measurable evidence behind the body of work.', eyebrow: 'Proof at a Glance', title: 'Authority & Proven Reach', description: 'Verified evidence supplied and approved by the CEO.', status: 'verified' },
  show: { id: 'show', purpose: 'Explain why the flagship show matters without repeating its performance statistics.', eyebrow: 'Transformational Conversations', title: 'The CJ Moneyway Show™', description: 'Transformational Conversations. Built For Purpose.', status: 'approved' },
  ranking: { id: 'ranking', purpose: 'Present independently documented historical chart performance.', eyebrow: 'Historical Chart Performance', title: 'Apple Podcasts U.S. Entrepreneurship Top 50', description: 'A verified third-party authority proof point from a documented 14-day run.', status: 'verified' },
  relationships: { id: 'relationships', purpose: "Demonstrate selected high-value relationships contributing to CJ's continued development and enterprise growth.", eyebrow: 'Strategic Relationships', title: 'Building alongside trusted leaders.', description: 'A selective view of approved mentoring, coaching, brand-building, and collaboration relationships.', status: 'approved' },
  value: { id: 'value', purpose: 'Connect the philosophy, experience, and ecosystem to practical value.', eyebrow: 'Why Work With CJ?', title: 'Purpose becomes measurable action.', description: 'CJ helps entrepreneurs, leaders, creators, organizations, and communities turn ideas into systems, conversations into opportunities, and purpose into measurable action. Through speaking, podcasting, publishing, AI education, media, and strategic collaboration, the emphasis is practical transformation — not inspiration alone.', status: 'approved' },
  nextStep: { id: 'next-step', purpose: 'Give every visitor a clear, relevant next action.', eyebrow: 'Choose Your Next Step', title: 'Explore how CJ Moneyway can help you build what comes next.', description: 'Select the pathway that best matches the conversation, resource, or collaboration you are seeking.', status: 'approved' },
  finalCta: { id: 'final-cta', purpose: 'Conclude the journey with a focused invitation to engage.', eyebrow: 'Built For Purpose™', title: 'Explore how CJ Moneyway can help you build what comes next.', description: 'Faith • Vision • Legacy™. Meaningful progress is built Brick by Brick™.', status: 'approved' },
} satisfies Record<string, SectionContent>

export const principles = ['Faith • Vision • Legacy™', 'Brick by Brick™', 'Legacy Over Likes™']

export const workAreas: ContentCard[] = [
  { title: 'Speaking & Experiences', description: 'Purpose, leadership, faith, resilience, storytelling, discipline, entrepreneurship, legacy, and practical transformation.', status: 'approved' },
  { title: 'The CJ Moneyway Show™', description: 'Transformational Conversations. Built For Purpose.', status: 'approved' },
  { title: 'Moneyway Lab™', description: 'Practical AI education, innovation, enterprise systems, and modern tools rooted in timeless principles.', status: 'approved' },
  { title: 'Moneyway Journal™', description: 'Editorial thought leadership, transformational stories, executive perspectives, and meaningful conversations transformed into written authority.', status: 'approved' },
  { title: 'Books & Publishing', description: 'Books, intellectual property, transformational writing, and publishing initiatives.', status: 'approved' },
  { title: 'Strategic Partnerships', description: 'Relationships, collaborations, and opportunities designed to create long-term enterprise value.', status: 'approved' },
]

export const ecosystem: EcosystemPlatform[] = [
  { category: 'Podcasting', name: 'The CJ Moneyway Show™', status: 'approved' }, { category: 'Publishing', name: 'Books and intellectual property', status: 'approved' },
  { category: 'Editorial', name: 'Moneyway Journal™', status: 'approved' }, { category: 'Speaking', name: 'Speaking & Experiences™', status: 'approved' },
  { category: 'AI Education & Innovation', name: 'Moneyway Lab™', status: 'approved' }, { category: 'Strategic Collaboration', name: 'Partnerships, relationships, and enterprise opportunities', status: 'approved' },
  { category: 'Enterprise Systems', name: 'Mission Control OS™', status: 'approved' },
]

export const authorityMetrics: AuthorityMetric[] = [
  { value: '2.3M+', label: 'Podcast Downloads', status: 'verified' }, { value: '300+', label: 'Episodes', status: 'verified' },
  { value: '122', label: 'Countries Reached', status: 'verified' }, { value: '57+', label: 'Podcast Guest Appearances', status: 'verified' },
  { value: '14', label: 'Consecutive Days in Apple Podcasts U.S. Entrepreneurship Top 50', status: 'verified' },
]

export const showCopy = {
  introduction: 'The CJ Moneyway Show™ brings entrepreneurs, leaders, authors, creators, innovators, and everyday people into conversations centered on purpose, resilience, leadership, faith, entrepreneurship, personal growth, and legacy.',
  impact: 'The platform is built around more than interviews. It documents stories, creates relationships, develops intellectual property, and turns meaningful conversations into assets that can continue creating impact beyond the original episode.',
  themes: ['Purpose', 'Leadership', 'Entrepreneurship', 'Faith', 'Resilience', 'Personal Growth', 'Innovation', 'Legacy', 'Meaningful Relationships', 'Transformational Storytelling'],
  roles: ['A conversation platform', 'A relationship-building platform', 'A storytelling platform', 'A media asset', 'A source of intellectual property', 'A gateway into the broader CJ Moneyway Media™ ecosystem'],
}

export const podcastRanking: PodcastRanking = {
  chart: 'Apple Podcasts U.S. Entrepreneurship', consecutiveDays: 14, dateRange: 'July 20–August 2, 2026', documentedRunPeak: 39,
  summary: 'The CJ Moneyway Show™ ranked in the Apple Podcasts U.S. Entrepreneurship Top 50 for 14 consecutive days, July 20 through August 2, 2026, reaching #39 during the documented run.', status: 'verified',
  sequence: [['July 20',40],['July 21',39],['July 22',40],['July 23',48],['July 24',44],['July 25',45],['July 26',47],['July 27',43],['July 28',45],['July 29',43],['July 30',45],['July 31',47],['August 1',50],['August 2',50]].map(([date, rank]) => ({ date: String(date), rank: Number(rank) })),
}

export const testimonialCategories: TestimonialCategory[] = [
  { id: 'host-testimonials', eyebrow: 'CJ as a Guest', title: 'What Hosts Say About CJ', description: 'Feedback from podcast hosts who interviewed CJ on their programs.', sources: ['The 9–5 Exit Plan', "Talk with Faith-J’s Podcast", 'Mind Over Habit', 'Unwrapped with Gift', 'Liquor Talk'], themes: ['Authenticity', 'Storytelling', 'Faith', 'Leadership', 'Entrepreneurship', 'Discipline', 'Practical wisdom', 'Relatability', 'Personal growth', 'Audience impact', 'Legacy', 'Professionalism'], quotePlaceholder: 'Approved host quotation and attribution required.', status: 'placeholder' },
  { id: 'guest-testimonials', eyebrow: 'CJ as a Host', title: 'What Guests Say About The CJ Moneyway Show™', description: "Feedback about guests' experience with CJ as a host, interviewer, storyteller, conversation facilitator, and media creator.", sources: [], themes: ['Insightful questions', 'Authentic conversation', 'Guest comfort', 'Professionalism', 'Deeper storytelling', 'Educational value', 'Natural conversation', 'Faith', 'Leadership', 'Purpose', 'Amplifying overlooked voices'], quotePlaceholder: 'Approved guest quotation and attribution required.', status: 'placeholder' },
]

export const strategicRelationships: StrategicRelationship[] = [
  { name: 'Marques Ogden', organization: 'Ogden Ventures, LLC', roles: ['Mentor', 'Coach', 'Collaborator'], status: 'approved' },
  { name: 'Stephen Seidel', organization: 'The Seidel Agency', roles: ['Strategic Partner', 'Brand Building', 'TEDx Preparation', 'Collaboration'], status: 'approved' },
]

export const valueStatements = ['Conversations become opportunities.', 'Ideas become systems.', 'Relationships become strategic assets.', 'Timeless principles meet modern tools.']

export const conversionPathways: ConversionPathway[] = [
  ['Book CJ to Speak', 'Bring purpose-led leadership, storytelling, resilience, and practical transformation to your audience.', 'Approved Booking Link Required'],
  ['Listen to The CJ Moneyway Show™', 'Explore meaningful conversations designed to create impact beyond the episode.', 'Approved Show Link Required'],
  ['Explore Moneyway Lab™', 'Discover practical AI education and modern enterprise tools rooted in timeless principles.', 'Approved Moneyway Lab™ Link Required'],
  ['Read Moneyway Journal™', 'Engage executive perspectives, transformational stories, and written thought leadership.', 'Approved Moneyway Journal™ Link Required'],
  ['Discover Books & Publishing', 'Explore books, intellectual property, and transformational publishing initiatives.', 'Approved Publishing Link Required'],
  ['Partner With CJ Moneyway Media™', 'Begin a conversation about strategic collaboration and long-term enterprise value.', 'Approved Partnership Link Required'],
].map(([title, description, label]) => ({ title, description, status: 'approved' as const, action: { label, status: 'placeholder' as const } }))
