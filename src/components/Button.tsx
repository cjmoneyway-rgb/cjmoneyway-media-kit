import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type SharedProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
}

type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ButtonProps = NativeButtonProps | LinkProps

export function Button(props: ButtonProps) {
  if ('href' in props && props.href) {
    const { children, variant = 'primary', ...linkProps } = props
    return <a className={`button button--${variant}`} {...linkProps}>{children}</a>
  }

  const { children, variant = 'primary', ...buttonProps } = props as NativeButtonProps
  return <button className={`button button--${variant}`} {...buttonProps}>{children}</button>
}
