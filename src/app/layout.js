import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexandru Clocicov — Web Developer",
  description: "Portfolio of Alexandru Clocicov, a passionate Full-Stack Web Developer from Chisinau, Moldova. Specializing in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Alexandru Clocicov — Web Developer",
    description: "Passionate Full-Stack Web Developer from Chisinau, Moldova. Specializing in React, Next.js, and modern web technologies.",
    url: "https://alexclocicov.vercel.app",
    siteName: "Alexandru Clocicov Portfolio",
    images: [{ url: "/mee3.jpg", width: 300, height: 300, alt: "Alexandru Clocicov" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandru Clocicov — Web Developer",
    description: "Passionate Full-Stack Web Developer from Chisinau, Moldova.",
    images: ["/mee3.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
          <Toaster />
        </header>
        <main>{children}</main>
        <footer >
          <Footer />
        </footer>
        </body>
    </html>
  );
}
