import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statics from "@/components/Statics";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="px-6">
      <Nav />
      <Hero />
      <Statics />
      <Features />
      <Pricing />
      <Testimonial />
    </main>
  );
}
