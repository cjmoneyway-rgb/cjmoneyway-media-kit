import type { ContentCard } from '../types/content'

export function PlatformCard({ eyebrow, title, description }: ContentCard) {
  return (
    <article className="platform-card">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </article>
  )
}
