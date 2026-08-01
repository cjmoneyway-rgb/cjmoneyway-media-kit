import { CTAGroup } from '../components/CTAGroup'
import { DownloadCard } from '../components/DownloadCard'
import { PlatformCard } from '../components/PlatformCard'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { downloads, faqs, platforms, sections, testimonials, topics } from '../data/mediaKitContent'

export function AboutAndMessage() {
  return (
    <section className="split-section section" id={sections.about.id}>
      <SectionHeading {...sections.about} />
      <div className="split-section__body"><p>{sections.about.description}</p><aside><p className="eyebrow">{sections.message.eyebrow}</p><blockquote>“{sections.message.title}”</blockquote></aside></div>
    </section>
  )
}

export function TopicsAndPlatforms() {
  return <>
    <section className="section section--navy" id={sections.topics.id}><SectionHeading {...sections.topics} /><div className="card-grid">{topics.map((item, i) => <PlatformCard key={i} {...item} />)}</div></section>
    <section className="section" id={sections.show.id}><SectionHeading eyebrow="Platforms & Publishing" title="Approved Platform Information Required" description="Approved Platform Overview Required" /><div className="card-grid">{platforms.map((item, i) => <PlatformCard key={i} {...item} />)}</div></section>
  </>
}

export function MediaAndTestimonials() {
  return <>
    <section className="media-banner section" id={sections.media.id}><SectionHeading {...sections.media} /><div className="media-placeholder">Approved Media Appearance Visual Required</div></section>
    <section className="section section--soft" id={sections.testimonials.id}><SectionHeading {...sections.testimonials} align="center" /><div className="testimonial-grid">{testimonials.map((item, i) => <TestimonialCard key={i} {...item} />)}</div></section>
  </>
}

export function DownloadsAndBooking() {
  return <>
    <section className="section" id={sections.downloads.id}><SectionHeading {...sections.downloads} /><div className="download-list">{downloads.map((item) => <DownloadCard key={item.title} {...item} />)}</div></section>
    <section className="booking section" id={sections.booking.id}><div><SectionHeading {...sections.booking} /><CTAGroup primaryHref="mailto:placeholder@example.com" primaryLabel="Approved Contact Required" secondaryHref="#faq" secondaryLabel="Review FAQ" /></div><div className="booking__mark" aria-hidden="true">CJ</div></section>
  </>
}

export function FAQAndJourney() {
  return <>
    <section className="section faq" id={sections.faq.id}><SectionHeading {...sections.faq} />{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
    <section className="journey section" id={sections.journey.id}><SectionHeading {...sections.journey} align="center" /><CTAGroup primaryHref="#top" primaryLabel="Return to Top" /></section>
  </>
}
