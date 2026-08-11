import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "./MagneticButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const RobotCTA = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div ref={cardRef} className="opacity-0">
          <Card className="relative h-[32rem] w-full overflow-hidden border-primary/20 bg-card/60 backdrop-blur-md sm:h-[28rem]">
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" size={280} />

            <div className="flex h-full flex-col lg:flex-row">
              <div className="relative z-10 flex flex-1 flex-col justify-center p-8 lg:p-12">
                <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
                  {t.hero.role}
                </p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-gradient">{t.contact.availability}</span>
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  {t.hero.description}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.contact.response_time}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <MagneticButton>
                    <Button
                      onClick={() => scrollToSection("projects")}
                      size="lg"
                      className="group bg-primary font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-neon"
                    >
                      {t.hero.cta_projects}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      size="lg"
                      className="border-primary font-semibold text-primary hover:bg-primary hover:text-black"
                    >
                      {t.hero.cta_contact}
                    </Button>
                  </MagneticButton>
                </div>
              </div>

              <div className="relative flex-1">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RobotCTA;
