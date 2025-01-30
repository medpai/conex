import styles from './FeaturedClubs.module.css';
import Image from 'next/image';
import codingclubImg from '@/img/FeaturedClubs/codingclub.jpg'
import debatesocietyImg from '@/img/FeaturedClubs/debatesociety.jpg'
import enviromentclubImg from '@/img/FeaturedClubs/enviromentclub.jpg'

const FeaturedClubs = () => {
  const clubs = [
    {
      title: "Coding Club",
      description: "Learn and practice coding with peers",
      image: codingclubImg,
      members: 50,
      tags: ["Technology", "Programming"],
    },
    {
      title: "Debate Society",
      description: "Enhance your public speaking skills",
      image: debatesocietyImg,
      members: 30,
      tags: ["Communication", "Leadership"],
    },
    {
      title: "Environmental Club",
      description: "Work towards a sustainable campus",
      image: enviromentclubImg,
      members: 40,
      tags: ["Environment", "Sustainability"],
    },
  ];

  return (
    <div className={styles.featuredClubs}>
      <h2 className={styles.title}>Featured Clubs</h2>
      <div className={styles.clubsContainer}>
        {clubs.map((club, index) => (
          <div key={index} className={styles.clubCard}>
            <h3 className={styles.clubTitle}>{club.title}</h3>
            <p className={styles.clubDescription}>{club.description}</p>
            <Image
              src={club.image}
              alt={club.title}
              className={styles.clubImage}
              width={300} 
              height={200} 
            />
            <p className={styles.clubMembers}>
              <strong>Members:</strong> {club.members}
            </p>
            <div className={styles.tags}>
              {club.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <button className={styles.joinButton}>Join Club</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedClubs;

