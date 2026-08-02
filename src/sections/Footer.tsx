import { approvedLinks } from '../data/mediaKitContent'

const footerLinks = [
  ['Website', approvedLinks.website], ['Podcast', approvedLinks.podcast], ['Speaking', approvedLinks.oneSheet], ['LinkedIn', approvedLinks.linkedin],
  ['YouTube', approvedLinks.youtube], ['Instagram', approvedLinks.instagram], ['TikTok', approvedLinks.tiktok], ['X', approvedLinks.x],
]

export function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="brand brand--footer"><span>CJ</span><span>CJ Moneyway Media™<small>Executive Media Kit</small></span></div><a className="button" href={approvedLinks.calendly} target="_blank" rel="noreferrer">Work With CJ<span className="sr-only"> (opens in a new tab)</span></a></div><nav aria-label="CJ Moneyway Media links"><ul>{footerLinks.map(([label, href]) => <li key={label}><a href={href} target="_blank" rel="noreferrer">{label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}</ul></nav><p className="footer-legal">© 2026 CJ Moneyway Media™. All Rights Reserved.</p></footer>
}
