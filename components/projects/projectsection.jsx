'use client';

import styles from './projectsection.module.css';
import ProjectCard from './projectcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ai from '/img/ai.jpg';
import social from '/img/social1.jpg';
import iot from '/img/iot.jpg'; 
import sustainablity from '/img/sustainability.jpg';

const projects = [
  {
    title: "AI Study Assistant",
    student: "Sarah Johnson",
    category: "Artificial Intelligence",
    image: ai, 
    description: "An AI-powered study assistant that helps students organize their notes and create personalized study plans.",
    technologies: ["Python", "TensorFlow", "React"],
    openPositions: [
      {
        role: "ML Engineer",
        spots: 2,
        skills: ["Python", "TensorFlow", "Machine Learning"]
      },
      {
        role: "Frontend Developer",
        spots: 1,
        skills: ["React", "TypeScript", "UI/UX"]
      }
    ]
  },
  {
    title: "EcoTrack",
    student: "Michael Chen",
    category: "Sustainability",
    image: sustainablity, 
    description: "A mobile app that helps students track and reduce their carbon footprint on campus.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    openPositions: [
      {
        role: "Mobile Developer",
        spots: 1,
        skills: ["React Native", "JavaScript", "Mobile UI"]
      },
      {
        role: "Backend Developer",
        spots: 1,
        skills: ["Node.js", "MongoDB", "API Design"]
      }
    ]
  },
  {
    title: "Campus Connect",
    student: "Emma Rodriguez",
    category: "Social",
    image: social, 
    description: "A platform for students to find study groups and collaborate on projects across different courses.",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    openPositions: [
      {
        role: "UI/UX Designer",
        spots: 1,
        skills: ["Figma", "UI Design", "User Research"]
      },
      {
        role: "Full Stack Developer",
        spots: 2,
        skills: ["Vue.js", "Firebase", "JavaScript"]
      }
    ]
  },
  {
    title: "SmartLibrary",
    student: "Alex Kim",
    category: "IoT",
    image: iot, 
    description: "An IoT system that shows real-time availability of study spaces in the library.",
    technologies: ["Arduino", "React", "AWS"],
    openPositions: [
      {
        role: "IoT Developer",
        spots: 1,
        skills: ["Arduino", "Sensors", "C++"]
      },
      {
        role: "Cloud Engineer",
        spots: 1,
        skills: ["AWS", "IoT Core", "Real-time Data"]
      }
    ]
  }
];

export default function ProjectSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Student Projects</h2>
        <p className={styles.subheading}>Join exciting student projects and gain hands-on experience</p>
        
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className={`${styles.swiper} ${styles.swiperNavigation} ${styles.swiperPagination}`}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
