import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Palette, Box, Zap } from "lucide-react";
import { useState } from "react";
import Particles from "./Particles";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    { name: "Unity", level: 80, icon: Code, xp: 4000, color: "text-emerald-500" },
    { name: "Blender", level: 90, icon: Box, xp: 4500, color: "text-orange-500" },
    { name: "Three.js", level: 75, icon: Zap, xp: 3750, color: "text-yellow-500" },
    { name: "Game Design", level: 75, icon: Palette, xp: 3750, color: "text-purple-500" },
    { name: "p5.js", level: 85, icon: Code, xp: 4250, color: "text-blue-500" },
    { name: "Arduino", level: 85, icon: Zap, xp: 4250, color: "text-pink-500" },
  ];

  const calculateTotalXP = () => {
    return skills.reduce((acc, skill) => acc + skill.xp, 0);
  };

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
    <section id="about" className="relative min-h-screen flex items-center py-20">
      <Particles />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Player Profile
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Level 25 Game Designer • {calculateTotalXP().toLocaleString()} Total XP
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Skills with XP bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Code size={24} />
              Skill Tree
            </h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(100,150,100,0.3)] cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`${skill.color} transition-all ${hoveredSkill === skill.name ? 'scale-110' : ''}`} size={20} />
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground">
                        Lvl {skill.level}
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ x: ['0%', '100%'] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>
                    {hoveredSkill === skill.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-muted-foreground mt-2"
                      >
                        {skill.xp.toLocaleString()} XP earned
                      </motion.p>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Character Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <h4 className="text-xl font-bold mb-3 text-primary">About The Player</h4>
              <p className="text-foreground/80 leading-relaxed">
                A designer who believes in crafting immersive worlds that blend nature with culture. My journey combines technical efficiency with artistic vision, creating experiences that inspire cultural exploration and natural education.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
