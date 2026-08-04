import type { Testimonial } from '../types/content'

export function TestimonialCard({ quote, name, role, organization, sourceType, status }: Testimonial) {
  return (
    <figure className="testimonial-card" data-source-type={sourceType} data-status={status}>
      <blockquote>“{quote}”</blockquote>
      <figcaption><strong>{name ?? 'Attribution Pending Approval'}</strong>{(role || organization) && <span>{[role, organization].filter(Boolean).join(' — ')}</span>}</figcaption>
    </figure>
  )
}
