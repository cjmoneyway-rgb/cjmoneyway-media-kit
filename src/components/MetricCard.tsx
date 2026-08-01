import type { Metric } from '../types/content'

export function MetricCard({ value, label }: Metric) {
  return <article className="metric-card"><strong>{value}</strong><span>{label}</span></article>
}
