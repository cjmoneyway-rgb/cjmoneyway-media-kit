import type { ContentCard } from '../types/content'
import { Button } from './Button'

export function DownloadCard({ title, description, action, status }: ContentCard) {
  return (
    <article className="download-card" data-status={status}>
      <div className="download-card__icon" aria-hidden="true">↓</div>
      <div><h3>{title}</h3><p>{description}</p></div>
      {action?.href ? <Button href={action.href} variant="text">{action.label}</Button> : <Button type="button" variant="text" disabled aria-label={`${title}: ${action?.label ?? 'Asset Pending Approval'}`}>{action?.label ?? 'Asset Pending Approval'}</Button>}
    </article>
  )
}
