import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/components/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
