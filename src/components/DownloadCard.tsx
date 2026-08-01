import type { ContentCard } from '../types/content'
import { Button } from './Button'

export function DownloadCard({ title, description, action }: ContentCard) {
  return (
    <article className="download-card">
      <div className="download-card__icon" aria-hidden="true">↓</div>
      <div><h3>{title}</h3><p>{description}</p></div>
      <Button type="button" variant="text" disabled>{action?.label ?? 'Approved Download Asset Required'}</Button>
    </article>
  )
}
