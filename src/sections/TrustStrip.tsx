import { MetricCard } from '../components/MetricCard'
import { metrics } from '../data/mediaKitContent'

export function TrustStrip() {
  return <section className="trust-strip" aria-label="Credibility metric placeholders">{metrics.map((metric, index) => <MetricCard key={index} {...metric} />)}</section>
}
