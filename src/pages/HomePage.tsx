import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Roadmap } from '../sections/Roadmap';
import { Trading } from '../sections/Trading';
import { Contact } from '../sections/Contact';

export const HomePage = () => {
  return (
    <main id="main-content">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About */}
      <About />

      {/* 3. Skills */}
      <Skills />

      {/* 4. Currently Learning / Roadmap */}
      <Roadmap />

      {/* 5. Trading (Prop Firm: Funded Hive) */}
      <Trading />

      {/* 6. Contact */}
      <Contact />
    </main>
  );
};
