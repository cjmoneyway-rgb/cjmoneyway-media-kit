import { Booking, Books, ContinueJourney, FAQ, MediaAppearances, MediaDownloads, About, Show, SignatureMessage, Testimonials, Topics } from '../sections/ContentSections'
import { Hero } from '../sections/Hero'
import { TrustStrip } from '../sections/TrustStrip'

export function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <About />
      <SignatureMessage />
      <Topics />
      <Show />
      <Books />
      <MediaAppearances />
      <Testimonials />
      <MediaDownloads />
      <Booking />
      <FAQ />
      <ContinueJourney />
    </main>
  )
}
