import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Agents from "@/components/Agents";
import Loop from "@/components/Loop";
import TokenEconomics from "@/components/TokenEconomics";
import Roadmap from "@/components/Roadmap";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Agents />
        <Loop />
        <TokenEconomics />
        <Roadmap />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
