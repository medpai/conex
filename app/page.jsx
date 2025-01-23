import styles from './page.module.css'
import HeroSection from '@/components/herosection'
import EventSection from '@/components/events/eventsection'
import ProjectSection from '@/components/projects/projectsection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventSection />
      <ProjectSection />

    </>
  )
}