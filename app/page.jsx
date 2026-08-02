import BootSequence from '@/components/BootSequence';
import Hero from '@/components/Hero';
import Origin from '@/components/Origin';
import Projects from '@/components/Projects';
import BestWork from '@/components/BestWork';
import Contact from '@/components/Contact';
import BottomNav from '@/components/BottomNav';
import Experience from '@/components/Experience';
import Recommendations from '@/components/Recommendations';

export default function Home() {
  return (
    <main>
      <BootSequence />
      <Hero />
      <Origin />
      <Projects />
      <BestWork />
      <Experience />
      <Recommendations />
      <Contact />
      <BottomNav />
    </main>
  );
}
