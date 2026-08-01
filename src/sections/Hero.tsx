import { CTAGroup } from '../components/CTAGroup'
import { hero } from '../data/mediaKitContent'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p>{hero.description}</p>
        <CTAGroup primaryHref="#booking" primaryLabel="Booking Details Required" secondaryHref="#downloads" secondaryLabel="View Media Assets" />
      </div>
      <div className="hero__portrait" role="img" aria-label={hero.imageLabel}>
        <div className="portrait-monogram">CJ</div><span>{hero.imageLabel}</span>
      </div>
      <p className="hero__side-note">Official Executive Media Kit <span>01</span></p>
    </section>
  )
}
