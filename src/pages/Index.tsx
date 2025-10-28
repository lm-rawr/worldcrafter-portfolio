import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navigation />
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Gallery />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
