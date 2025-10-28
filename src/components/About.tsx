import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Palette, Box, Zap, Trophy, Star, Target } from "lucide-react";
import { useState } from "react";
import Particles from "./Particles";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [totalXP, setTotalXP] = useState(0);
  
  const skills = [
    { name: "Unity", level: 90, icon: Code, xp: 4500, color: "text-emerald-500" },
    { name: "Unreal Engine", level: 85, icon: Code, xp: 4250, color: "text-blue-500" },
    { name: "Blender", level: 80, icon: Box, xp: 4000, color: "text-orange-500" },
    { name: "Three.js", level: 75, icon: Zap, xp: 3750, color: "text-yellow-500" },
    { name: "Game Design", level: 95, icon: Palette, xp: 4750, color: "text-purple-500" },
    { name: "Level Design", level: 88, icon: Palette, xp: 4400, color: "text-pink-500" },
  ];

  const achievements = [
    { title: "First Game Published", icon: Trophy, unlocked: true },
    { title: "Master of Unity", icon: Star, unlocked: true },
    { title: "3D Modeling Expert", icon: Box, unlocked: true },
    { title: "Level Design Pro", icon: Target, unlocked: false },
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

        {/* Gamified Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:shadow-[0_0_30px_rgba(100,150,100,0.3)]">
              <div className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="text-3xl font-bold text-primary">12+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:shadow-[0_0_30px_rgba(100,150,100,0.3)]">
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:shadow-[0_0_30px_rgba(100,150,100,0.3)]">
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-muted-foreground">Passion Rate</p>
              </div>
            </Card>
          </motion.div>
        </div>

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

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Trophy size={24} />
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className={`p-6 text-center ${
                      achievement.unlocked 
                        ? 'bg-card/50 backdrop-blur-sm border-primary/50 shadow-[0_0_20px_rgba(100,150,100,0.2)]' 
                        : 'bg-card/20 backdrop-blur-sm border-border/30 opacity-50 grayscale'
                    } transition-all cursor-pointer`}>
                      <Icon className={achievement.unlocked ? 'text-primary' : 'text-muted'} size={32} />
                      <p className="text-sm mt-3 font-medium">{achievement.title}</p>
                      {achievement.unlocked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 bg-primary rounded-full p-1"
                        >
                          <Star size={12} fill="currentColor" />
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Character Bio */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <h4 className="text-xl font-bold mb-3 text-primary">About The Player</h4>
              <p className="text-foreground/80 mb-3 leading-relaxed">
                A game designer who believes in crafting immersive worlds where every 
                mechanic tells a story and every system serves a purpose.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My journey combines technical mastery with artistic vision, 
                creating experiences that resonate with players long after they 
                put down the controller.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
