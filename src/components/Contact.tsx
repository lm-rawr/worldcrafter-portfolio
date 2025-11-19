import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Instagram, Youtube } from "lucide-react";
import Particles from "./Particles";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/lm-rawr", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aadhar-wasti-575998256/", color: "hover:text-primary" },
    { icon: Mail, label: "Email", href: "mailto:wastiaadhar10@gmail.com", color: "hover:text-accent" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/aawazdesigns/", color: "hover:text-accent" },
    { icon: Youtube, label: "Youtube", href: "https://www.youtube.com/@aawazanimates", color: "hover:text-accent" },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20 bg-muted/20">
      <Particles />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Let's Connect
              </h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-muted/50 rounded-lg transition-all ${social.color} hover:bg-muted hover:translate-x-2`}
                    >
                      <Icon size={24} />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
