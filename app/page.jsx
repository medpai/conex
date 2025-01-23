import styles from './page.module.css'
import HeroSection from '@/components/herosection'
import EventSection from '@/components/events/eventsection'
import ProjectSection from '@/components/projects/projectsection'
import FeaturedClubsSection from '@/components/FeaturedClubs/FeaturedClubs'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventSection />
      <ProjectSection />
      <FeaturedClubsSection />
    </>
  )
}