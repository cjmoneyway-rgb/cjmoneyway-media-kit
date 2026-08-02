import { Button } from './Button'
import type { CallToAction } from '../types/content'

type CTAGroupProps = { actions: CallToAction[] }

export function CTAGroup({ actions }: CTAGroupProps) {
  return (
    <div className="cta-group">
      {actions.map((action, index) => action.href
        ? <Button href={action.href} variant={index === 0 ? 'primary' : 'secondary'} key={action.label}>{action.label}<span className="sr-only"> (opens in a new tab)</span></Button>
        : <Button type="button" variant={index === 0 ? 'primary' : 'secondary'} disabled key={action.label}>{action.label}</Button>)}
    </div>
  )
}
