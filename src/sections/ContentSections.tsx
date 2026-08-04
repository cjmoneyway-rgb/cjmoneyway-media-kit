import { AssetPlaceholder } from '../components/AssetPlaceholder'
import { Button } from '../components/Button'
import { DownloadCard } from '../components/DownloadCard'
import { PlatformCard } from '../components/PlatformCard'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { approvedLinks, authorityMetrics, conversionPathways, ecosystem, mediaDownloads, podcastRanking, principles, sections, showCopy, strategicRelationships, testimonialCategories, valueStatements, workAreas } from '../data/mediaKitContent'
import type { SectionContent, TestimonialCategory } from '../types/content'

function Intro({ content, align = 'left' }: { content: SectionContent; align?: 'left' | 'center' }) {
  return <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} align={align} />
}

export function Represents() {
  const content = sections.represents
  return <section className="section philosophy" id={content.id} data-status={content.status}><Intro content={content} align="center" /><ul className="principle-list">{principles.map((item) => <li key={item}>{item}</li>)}</ul></section>
}

export function Work() {
  const content = sections.work
  return <section className="section" id={content.id} data-status={content.status}><Intro content={content} /><div className="card-grid card-grid--two">{workAreas.map((item) => <PlatformCard key={item.title} {...item} />)}</div></section>
}

export function Ecosystem() {
  const content = sections.ecosystem
  return <section className="section ecosystem" id={content.id} data-status={content.status}><Intro content={content} align="center" /><div className="ecosystem__hub">CJ Moneyway Media™<span>Master Enterprise</span></div><div className="ecosystem__network">{ecosystem.map((item) => <article key={item.category}><p className="eyebrow">{item.category}</p><h3>{item.name}</h3></article>)}</div></section>
}

export function Authority() {
  const content = sections.authority
  return <section className="section authority" id={content.id} data-status={content.status}><SectionHeading eyebrow={content.eyebrow} title={content.title} /><div className="authority-grid">{authorityMetrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></article>)}</div></section>
}

export function Show() {
  const content = sections.show
  return <section className="section show-section" id={content.id} data-status={content.status}><Intro content={content} /><div className="show-brand-row"><AssetPlaceholder label="The CJ Moneyway Show™ logo" compact /><div className="cta-group"><Button href={approvedLinks.podcast}>Listen to the Podcast</Button><Button href={approvedLinks.bleav} variant="text">View on Bleav</Button></div></div><div className="show-copy"><div><p>{showCopy.introduction}</p><p>{showCopy.impact}</p></div><div><h3>Why the platform matters</h3><ul className="check-list">{showCopy.roles.map((item) => <li key={item}>{item}</li>)}</ul></div></div><div className="tag-list" aria-label="Show themes">{showCopy.themes.map((theme) => <span key={theme}>{theme}</span>)}</div></section>
}

export function Ranking() {
  const content = sections.ranking
  return <section className="section ranking" id={content.id} data-status={content.status}><Intro content={content} /><div className="ranking__proof"><div><strong>{podcastRanking.consecutiveDays}</strong><span>Consecutive Days</span></div><div><strong>Top 50</strong><span>{podcastRanking.chart}</span></div><div><strong>#{podcastRanking.documentedRunPeak}</strong><span>Peak during verified run</span></div></div><p className="ranking__summary">{podcastRanking.summary}</p><details><summary>View the verified daily sequence</summary><ol className="ranking-sequence">{podcastRanking.sequence.map((item) => <li key={item.date}><span>{item.date}</span><strong>#{item.rank}</strong></li>)}</ol></details></section>
}

function TestimonialSection({ category }: { category: TestimonialCategory }) {
  return <section className="section testimonial-category" id={category.id} data-status={category.status}><SectionHeading eyebrow={category.eyebrow} title={category.title} description={category.description} /><div className="testimonial-evidence"><TestimonialCard {...category.testimonial} /><aside className="testimonial-proof" aria-label="Review verification"><p className="eyebrow">Source verification</p><p>{category.sourceNote}</p>{category.supportingProof && <p className="testimonial-proof__metric"><strong>{category.supportingProof.value}</strong><span>{category.supportingProof.label}</span></p>}<h3>Review themes</h3><div className="tag-list">{category.themes.map((theme) => <span key={theme}>{theme}</span>)}</div></aside></div></section>
}

export function HostTestimonials() { return <TestimonialSection category={testimonialCategories[0]} /> }
export function GuestTestimonials() { return <TestimonialSection category={testimonialCategories[1]} /> }

export function Relationships() {
  const content = sections.relationships
  return <section className="section relationships" id={content.id} data-status={content.status}><Intro content={content} /><div className="relationship-grid">{strategicRelationships.map((item) => <article key={item.name}><AssetPlaceholder label={`${item.name} relationship asset`} compact /><p className="eyebrow">{item.organization}</p><h3>{item.name}</h3><ul>{item.roles.map((role) => <li key={role}>{role}</li>)}</ul></article>)}</div><p className="section-note">Relationships shown are selective and do not imply sponsorship, ownership, employment, formal endorsement, agency representation, or client status.</p></section>
}

export function Value() {
  const content = sections.value
  return <section className="section value" id={content.id} data-status={content.status}><Intro content={content} /><div className="value-grid">{valueStatements.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div></section>
}

export function NextStep() {
  const content = sections.nextStep
  return <section className="section next-step" id={content.id} data-status={content.status}><Intro content={content} align="center" /><div className="card-grid card-grid--two">{conversionPathways.map((item) => <PlatformCard key={item.title} {...item} />)}</div><div className="media-downloads" aria-labelledby="media-downloads-title"><header><p className="eyebrow">Press &amp; Media</p><h3 id="media-downloads-title">Media Downloads</h3><p>Approved resources will become available here as production assets are supplied.</p></header><div className="download-list">{mediaDownloads.map((item) => <DownloadCard key={item.title} {...item} />)}</div></div></section>
}

export function FinalCTA() {
  const content = sections.finalCta
  return <section className="section final-cta" id={content.id} data-status={content.status}><Intro content={content} align="center" /><div className="cta-group"><Button href={approvedLinks.calendly}>Work With CJ</Button><Button href={approvedLinks.website} variant="secondary">Explore CJ Moneyway Media™</Button></div></section>
}
