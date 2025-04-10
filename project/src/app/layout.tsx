
import "./globals.css";
import styles from './styles.module.css'
import Navbar from "@/components/Navbar";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer";

const raleway = Raleway({subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className={styles.fade}>
          <Navbar/>
          </div>
        {children}
        <div className={styles.fade}>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
