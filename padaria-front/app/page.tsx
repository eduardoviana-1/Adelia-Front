import { Hero } from '@/src/components/sections/Hero';
import { OurStory } from '@/src/components/sections/OurStory';
import { FeaturedGateways } from '@/src/components/sections/FeaturedGateways';

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <FeaturedGateways />
    </>
  );
}
