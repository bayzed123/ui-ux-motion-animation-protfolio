import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
