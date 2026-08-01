import type { Testimonial } from '../types/content'

export function TestimonialCard({ quote, attribution, role }: Testimonial) {
  return (
    <figure className="testimonial-card">
      <blockquote>“{quote}”</blockquote>
      <figcaption><strong>{attribution}</strong><span>{role}</span></figcaption>
    </figure>
  )
}
