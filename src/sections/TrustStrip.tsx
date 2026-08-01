import { MetricCard } from '../components/MetricCard'
import { metrics } from '../data/mediaKitContent'

export function TrustStrip() {
  return <section className="trust-strip" id="trust" aria-label="Credibility and trust placeholders" data-purpose="Surface verified credibility signals early in the visitor journey.">{metrics.map((metric, index) => <MetricCard key={index} {...metric} />)}</section>
}
