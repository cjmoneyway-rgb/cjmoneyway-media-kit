import { CTAGroup } from '../components/CTAGroup'
import { hero } from '../data/mediaKitContent'

export function Hero() {
  return (
    <section className="hero" id={hero.id} aria-labelledby="hero-title" data-purpose={hero.purpose}>
      <div className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p>{hero.description}</p>
        <CTAGroup actions={hero.ctas ?? []} />
      </div>
      <div className="hero__portrait" role="img" aria-label={hero.imageLabel}>
        <div className="portrait-monogram">CJ</div><span>{hero.imageLabel}</span>
      </div>
      <p className="hero__side-note">Official Executive Media Kit <span>01</span></p>
    </section>
  )
}
