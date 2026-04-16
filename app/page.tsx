import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <MarqueeBanner />
      <About />
      <Trainers />
      <Footer />
    </>
  );
}
