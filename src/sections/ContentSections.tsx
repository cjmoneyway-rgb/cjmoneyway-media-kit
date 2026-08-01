import { CTAGroup } from '../components/CTAGroup'
import { DownloadCard } from '../components/DownloadCard'
import { PlatformCard } from '../components/PlatformCard'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { books, downloads, faqs, journeyPlatforms, mediaAppearances, sections, showItems, testimonials, topics } from '../data/mediaKitContent'
import type { SectionContent } from '../types/content'

function SectionIntro({ content, align }: { content: SectionContent; align?: 'left' | 'center' }) {
  return <><SectionHeading {...content} align={align} />{content.ctas && <CTAGroup actions={content.ctas} />}</>
}

export function About() {
  const content = sections.about
  return <section className="section" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} /></section>
}

export function SignatureMessage() {
  const content = sections.message
  return <section className="section philosophy" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} align="center" /></section>
}

export function Topics() {
  const content = sections.topics
  return <section className="section section--navy" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} /><div className="card-grid">{topics.map((item, index) => <PlatformCard key={index} {...item} />)}</div></section>
}

export function Show() {
  const content = sections.show
  return <section className="section" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} /><div className="card-grid card-grid--single">{showItems.map((item) => <PlatformCard key={item.title} {...item} />)}</div></section>
}

export function Books() {
  const content = sections.books
  return <section className="section section--soft" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} /><div className="card-grid card-grid--single">{books.map((item) => <PlatformCard key={item.title} {...item} />)}</div></section>
}

export function MediaAppearances() {
  const content = sections.media
  return <section className="section" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} /><div className="card-grid">{mediaAppearances.map((item, index) => <PlatformCard key={index} {...item} />)}</div></section>
}

export function Testimonials() {
  const content = sections.testimonials
  return <section className="section section--soft" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} align="center" /><div className="testimonial-grid">{testimonials.map((item, index) => <TestimonialCard key={index} {...item} />)}</div></section>
}

export function MediaDownloads() {
  const content = sections.downloads
  return <section className="section" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} /><div className="download-list">{downloads.map((item) => <DownloadCard key={item.title} {...item} />)}</div></section>
}

export function Booking() {
  const content = sections.booking
  return <section className="booking section" id={content.id} data-purpose={content.purpose}><div><SectionIntro content={content} /></div><div className="booking__mark" aria-hidden="true">CJ</div></section>
}

export function FAQ() {
  const content = sections.faq
  return <section className="section faq" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} />{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
}

export function ContinueJourney() {
  const content = sections.journey
  return <section className="journey section" id={content.id} data-purpose={content.purpose}><SectionIntro content={content} align="center" /><div className="card-grid">{journeyPlatforms.map((item, index) => <PlatformCard key={index} {...item} />)}</div></section>
}
