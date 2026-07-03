import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import ExperienceGrid from "@/components/ExperienceGrid";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-28 pb-12 overflow-x-hidden">
        <Hero />
        <FeaturedProject />
        <Projects />
        <ExperienceGrid />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}
