import type { ContentCard } from '../types/content'
import { Button } from './Button'

export function DownloadCard({ title, description, actionLabel = 'Asset Required' }: ContentCard) {
  return (
    <article className="download-card">
      <div className="download-card__icon" aria-hidden="true">↓</div>
      <div><h3>{title}</h3><p>{description}</p></div>
      <Button type="button" variant="text" disabled>{actionLabel}</Button>
    </article>
  )
}
