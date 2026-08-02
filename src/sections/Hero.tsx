import { CTAGroup } from '../components/CTAGroup'
import { AssetPlaceholder } from '../components/AssetPlaceholder'
import { hero } from '../data/mediaKitContent'

export function Hero() {
  return (
    <section className="hero" id={hero.id} aria-labelledby="hero-title" data-status={hero.status}>
      <div className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p>{hero.description}</p>
        <p className="hero__supporting">{hero.supportingCopy}</p>
        <ul className="hero__markers">{hero.identityMarkers.map((marker) => <li key={marker}>{marker}</li>)}</ul>
        <CTAGroup actions={hero.ctas} />
      </div>
      <AssetPlaceholder className="hero__portrait" label={hero.imageLabel} />
      <p className="hero__side-note">Official Executive Media Kit <span>01</span></p>
    </section>
  )
}
