import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexandru Clocicov",
  description: "Web Developer Alexandru Clocicov",
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
