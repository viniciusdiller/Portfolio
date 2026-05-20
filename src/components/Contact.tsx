import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import SplitTitle from "./SplitTitle";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 88%" } }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: subtitleRef.current, start: "top 88%" } }
      );
      gsap.fromTo(formCardRef.current,
        { opacity: 0, x: -50, rotateY: -5, transformOrigin: "right center" },
        { opacity: 1, x: 0, rotateY: 0, duration: 0.8, ease: "back.out(1.2)",
          scrollTrigger: { trigger: formCardRef.current, start: "top 88%" } }
      );
      gsap.fromTo(infoCardRef.current,
        { opacity: 0, x: 50, rotateY: 5, transformOrigin: "left center" },
        { opacity: 1, x: 0, rotateY: 0, duration: 0.8, ease: "back.out(1.2)",
          scrollTrigger: { trigger: infoCardRef.current, start: "top 88%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast({ variant: "destructive", title: "Erro", description: "Por favor preencha todos os campos." });
      setIsSubmitting(false);
      return;
    }
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      toast({ title: t.contact.success, description: t.contact.response_time });
      setFormData({ name: "", email: "", message: "" });
      form.current?.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({ variant: "destructive", title: t.contact.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, label: "GitHub", url: "https://github.com/viniciusdiller/Portfolio", username: "@viniciusdiller" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", url: "https://www.linkedin.com/in/viniciusdiller/", username: "Vinícius Diller" },
    { icon: <Mail className="h-6 w-6" />, label: "Email", url: "mailto:viniciusdiller@gmail.com", username: "viniciusdiller@gmail.com" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SplitTitle as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {`${t.contact.title} ${t.contact.title_highlight}`}
          </SplitTitle>
          <div ref={dividerRef} className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p ref={subtitleRef} className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={formCardRef} className="opacity-0">
            <Card className="card-glass p-8">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.name_label}</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.name_placeholder} required className="bg-background/50 border-border focus:border-primary" disabled={isSubmitting} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.email_label}</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.contact.email_placeholder} required className="bg-background/50 border-border focus:border-primary" disabled={isSubmitting} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.message_label}</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t.contact.message_placeholder} rows={6} required className="bg-background/50 border-border focus:border-primary resize-none" disabled={isSubmitting} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-lg hover:shadow-neon transition-all" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </Button>
              </form>
            </Card>
          </div>

          <div ref={infoCardRef} className="opacity-0">
            <Card className="card-glass p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">{t.contact.info_title}</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/10 transition-all">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">{t.contact.availability}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t.contact.response_time}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
