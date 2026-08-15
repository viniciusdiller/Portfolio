import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedScroll from "@/components/FeaturedScroll";
import RobotCTA from "@/components/RobotCTA";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StickySections from "@/components/StickySections";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <ScrollProgress />
      <Navbar />
      <StickySections>
        <Hero />
        <FeaturedScroll />
        <RobotCTA />
        <About />
        <Projects />
      </StickySections>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
