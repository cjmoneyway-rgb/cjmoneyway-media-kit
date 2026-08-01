import { Button } from './Button'

type CTAGroupProps = { primaryHref: string; primaryLabel: string; secondaryHref?: string; secondaryLabel?: string }

export function CTAGroup({ primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTAGroupProps) {
  return (
    <div className="cta-group">
      <Button href={primaryHref}>{primaryLabel}</Button>
      {secondaryHref && secondaryLabel && <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button>}
    </div>
  )
}
