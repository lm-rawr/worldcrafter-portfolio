import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Palette, Box, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Unity", level: 90, icon: Code },
    { name: "Unreal Engine", level: 85, icon: Code },
    { name: "Blender", level: 80, icon: Box },
    { name: "Three.js", level: 75, icon: Zap },
    { name: "Game Design", level: 95, icon: Palette },
    { name: "Level Design", level: 88, icon: Palette },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating worlds through interactive stories, systems, and art
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Game Designer & Developer
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                With a passion for immersive, interactive experiences, I specialize in
                crafting engaging game worlds that blend compelling narratives with
                innovative gameplay mechanics.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My approach combines technical expertise in game engines with a strong
                foundation in art and design, allowing me to create holistic gaming
                experiences that resonate with players.
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="text-primary" size={20} />
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-neon"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Experience</span> Timeline
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
            <div className="space-y-8">
              {[
                { year: "2024", title: "Senior Game Designer", desc: "Leading innovative projects" },
                { year: "2023", title: "Indie Game Development", desc: "Published multiple titles" },
                { year: "2022", title: "3D Artist & Developer", desc: "Expanding technical skills" },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <Card className="w-5/12 p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
