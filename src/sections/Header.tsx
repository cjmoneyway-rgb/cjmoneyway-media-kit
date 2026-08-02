import { navigation } from '../data/mediaKitContent'
import { approvedLinks } from '../data/mediaKitContent'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="CJ Moneyway media kit home"><span>CJ</span><span>CJ Moneyway<small>Executive Media Kit</small></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><ul>{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></nav>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation"><ul>{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></nav>
      </details>
      <a className="header-cta" href={approvedLinks.calendly} target="_blank" rel="noreferrer">Work With CJ <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
    </header>
  )
}
