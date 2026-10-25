import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Ancillary from "@/components/Ancillary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <div id="objectives">
        <Objectives />
      </div>
      <div id="ancillary">
        <Ancillary />
      </div>
      <Footer />
    </main>
  );
}
