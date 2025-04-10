
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Raleway } from "next/font/google";

const raleway = Raleway({subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
          <Navbar/>
        {children}
      </body>
    </html>
  );
}
