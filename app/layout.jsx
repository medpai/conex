// Importation des styles globaux
import "./globals.css";
import styles from "./layout.module.css";

// Importation des composants Header et Footer
import Header from "@/components/header";
import Footer from '@/components/footer';

// Metadonnees pour la page
export const metadata = {
  title: "Conex | Connectez-vous aux projets et événements universitaires",
  description: "Conex est une plateforme qui facilite les connexions entre professionnels et étudiants, offrant des opportunités de networking, des événements enrichissants et des projets collaboratifs.",
};

// Fonction principale pour la mise en page racine
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
