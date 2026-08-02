import { MetricCard } from '../components/MetricCard'
import { authorityMetrics } from '../data/mediaKitContent'

export function TrustStrip() {
  return <section className="trust-strip" aria-label="Verified authority metrics">{authorityMetrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</section>
}
