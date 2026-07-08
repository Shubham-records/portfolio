import BootSequence from '@/components/BootSequence';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import Origin from '@/components/Origin';
import Projects from '@/components/Projects';
import BestWork from '@/components/BestWork';
import Contact from '@/components/Contact';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <main>
      <BootSequence />
      <TopBar />
      <Hero />
      <Origin />
      <Projects />
      <BestWork />
      <Contact />
      <BottomNav />
    </main>
  );
}
