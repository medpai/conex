// Importation des styles globaux
import "./globals.css";
import styles from "./layout.module.css";

// Importation des composants Header et Footer
import Header from "@/components/header";
import Footer from '@/components/footer';

// Metadonnees pour la page
export const metadata = {
  title: "Conex",
  description: "Connect with university projects and events",
};

// Fonction principale pour la mise en page racine
export default function RootLayout({ children }) {
  return (
    <html lang="en">
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