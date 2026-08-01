import type { ReactNode } from 'react'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><Header />{children}<Footer /></>
}
