import { AboutAndMessage, DownloadsAndBooking, FAQAndJourney, MediaAndTestimonials, TopicsAndPlatforms } from '../sections/ContentSections'
import { Hero } from '../sections/Hero'
import { TrustStrip } from '../sections/TrustStrip'

export function HomePage() {
  return <main><Hero /><TrustStrip /><AboutAndMessage /><TopicsAndPlatforms /><MediaAndTestimonials /><DownloadsAndBooking /><FAQAndJourney /></main>
}
