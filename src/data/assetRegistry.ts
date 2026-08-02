import type { ContentStatus } from '../types/content'

export type AssetSlot = {
  id: string
  label: string
  intendedPath: string
  status: ContentStatus
  alt: string
  dimensions?: string
}

export const executiveImageSlots: AssetSlot[] = [
  { id: 'hero-portrait', label: 'Hero portrait', intendedPath: 'src/assets/cj/hero-portrait', status: 'placeholder', alt: 'CJ Moneyway executive portrait' },
  { id: 'professional-headshot', label: 'Professional headshot', intendedPath: 'src/assets/cj/professional-headshot', status: 'placeholder', alt: 'Professional headshot of CJ Moneyway' },
  { id: 'podcast-media', label: 'Podcast and media image', intendedPath: 'src/assets/cj/podcast-media', status: 'placeholder', alt: 'CJ Moneyway in a podcast media setting' },
  { id: 'speaking', label: 'Speaking image', intendedPath: 'src/assets/cj/speaking', status: 'placeholder', alt: 'CJ Moneyway speaking to an audience' },
  { id: 'transparent-cutout', label: 'Transparent PNG cutout', intendedPath: 'src/assets/cj/executive-cutout.png', status: 'placeholder', alt: 'CJ Moneyway executive cutout' },
]

export const logoSlots: AssetSlot[] = [
  'CJ Moneyway Media™', 'The CJ Moneyway Show™', 'Moneyway Lab™', 'Moneyway Journal™', 'Mission Control OS™', 'Speaking / executive mark',
].map((label) => ({ id: label.toLowerCase().replace(/[^a-z]+/g, '-').replace(/(^-|-$)/g, ''), label, intendedPath: 'src/assets/logos/', status: 'placeholder', alt: `${label} approved brand mark` }))

export const socialSharingSlot: AssetSlot = {
  id: 'social-sharing-card', label: 'Social sharing card', intendedPath: 'src/assets/press/social-sharing-1200x630', status: 'placeholder',
  alt: 'CJ Moneyway executive media kit social preview', dimensions: '1200 × 630',
}
