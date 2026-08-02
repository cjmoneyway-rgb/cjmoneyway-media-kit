import type { ContentCard } from '../types/content'
import { Button } from './Button'

export function PlatformCard({ eyebrow, title, description, action }: ContentCard) {
  return (
    <article className="platform-card" data-status={action?.status ?? 'approved'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      <p>{description}</p>
      {action?.href
        ? <Button href={action.href} variant="text">{action.label}</Button>
        : action && <Button type="button" variant="text" disabled>{action.label}</Button>}
      {!action && <span className="card-arrow" aria-hidden="true">↗</span>}
    </article>
  )
}
