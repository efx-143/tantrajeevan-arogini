import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Ancillary from "@/components/Ancillary";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#1c1917] flex flex-col">
      <Navbar />
      <Hero />
      <Objectives />
      <Ancillary />
      <AboutSection />
      <Footer />
    </main>
  );
}
