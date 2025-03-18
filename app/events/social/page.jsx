'use client';
//Importation des composants
import EventDetails from '@/components/events/EventDetails';
import socialImg from '@/img/social.jpg';
import styles from './page.module.css';
import SocialEventContent from './SocialEventContent';

export const metadata = {
  title: 'Social Events | Conex',
  description: 'Discover social events at your university'
};

export default function SocialEventPage() {
  // Programme de la soiree
  const schedule = [
    { time: '18:30', activity: 'Accueil & Cocktail de Bienvenue' },
    { time: '19:00', activity: 'Mot de Bienvenue & Introduction' },
    { time: '19:15', activity: 'Session de Speed Networking' },
    { time: '20:00', activity: 'Buffet Dinatoire & Networking Libre' },
    { time: '20:45', activity: 'Presentations Eclair (5 min)' },
    { time: '21:30', activity: 'Networking & Discussions' },
    { time: '22:30', activity: 'Cloture de l\'evenement' }
  ];

  // Points forts de l'evenement
  const highlights = [
    {
      title: 'Speed Networking',
      description: 'Sessions structurees de 5 minutes pour maximiser vos rencontres'
    },
    {
      title: 'Presentations Eclair',
      description: 'Opportunite de presenter votre projet ou entreprise'
    },
    {
      title: 'Buffet Gourmet',
      description: 'Une selection de mets raffines et boissons'
    }
  ];

  // Liste des intervenants
  const speakers = [
    {
      name: 'Sophie Dubois',
      role: 'CEO, TechMontreal',
      topic: 'L\'avenir de la Tech a Montreal'
    },
    {
      name: 'Marc Tremblay',
      role: 'Fondateur, StartupQC',
      topic: 'Ecosysteme Startup'
    },
    {
      name: 'Julie Chen',
      role: 'Directrice, Innovation Hub',
      topic: 'Innovation & Networking'
    }
  ];

  return (
    <SocialEventContent
      title="Soiree Networking CONEX"
      date="22 Mars 2024"
      description="Participez a notre soiree networking exclusive dediee aux professionnels de la tech et de l'entrepreneuriat. Une occasion unique de rencontrer des personnes passionnees, d'echanger des idees et de creer des connexions durables.\n\nDans une ambiance sophistiquee au Salon Richmond, venez developper votre reseau professionnel tout en profitant d'un buffet gourmet et de presentations inspirantes."
      imagePath={socialImg}
      location="Le Salon Richmond - Montreal"
      participants="100"
      category="Social"
      schedule={schedule}
      highlights={highlights}
      speakers={speakers}
    />
  );
}
