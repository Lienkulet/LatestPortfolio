import Skills from "@/components/Skills";
import Hero from "../components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen md:pt-20 font-mulish">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
  );
}
