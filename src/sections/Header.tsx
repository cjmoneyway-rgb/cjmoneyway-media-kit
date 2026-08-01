import { navigation } from '../data/mediaKitContent'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="CJ Moneyway media kit home"><span>CJ</span><span>CJ Moneyway<small>Executive Media Kit</small></span></a>
      <nav aria-label="Primary navigation"><ul>{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></nav>
      <a className="header-cta" href="#booking">Inquiry <span aria-hidden="true">↗</span></a>
    </header>
  )
}
