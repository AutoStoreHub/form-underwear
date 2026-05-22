import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { TrustBar } from "@/components/TrustBar";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FabricStory } from "@/components/FabricStory";
import { SocialProof } from "@/components/SocialProof";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeStrip />
        <TrustBar />
        <FeaturedProducts />
        <FabricStory />
        <SocialProof />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
