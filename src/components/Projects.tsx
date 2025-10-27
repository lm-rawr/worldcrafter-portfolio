import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Neon Pulse",
      description: "Fast-paced cyberpunk action game with dynamic combat systems",
      fullDescription: "An intense action game featuring fluid combat mechanics, procedural enemy generation, and a progression system that rewards skill and strategy. Built with Unity and C#, featuring multiplayer support with dedicated server architecture.",
      tags: ["Unity", "C#", "Multiplayer"],
      gradient: "from-primary to-accent",
      gameLink: "https://example.com/neon-pulse",
      githubLink: "https://github.com/example/neon-pulse",
    },
    {
      title: "Mystic Realms",
      description: "Fantasy RPG featuring procedural world generation",
      fullDescription: "An open-world fantasy RPG with infinite procedural terrain generation, dynamic quest systems, and AI-driven NPC behaviors. Created in Unreal Engine with advanced Blueprint scripting and custom AI behavior trees.",
      tags: ["Unreal", "Blueprint", "AI"],
      gradient: "from-accent to-secondary",
      gameLink: "https://example.com/mystic-realms",
      githubLink: "https://github.com/example/mystic-realms",
    },
    {
      title: "Quantum Shift",
      description: "Puzzle platformer exploring time manipulation mechanics",
      fullDescription: "A mind-bending puzzle platformer where players manipulate time to solve challenges. Features custom shader effects for time distortion, physics-based puzzles, and a narrative that unfolds through environmental storytelling.",
      tags: ["Unity", "Shader", "Physics"],
      gradient: "from-secondary to-primary",
      gameLink: "https://example.com/quantum-shift",
      githubLink: "https://github.com/example/quantum-shift",
    },
    {
      title: "Urban Legends",
      description: "Narrative-driven adventure in a modern fantasy setting",
      fullDescription: "A story-rich adventure game blending modern urban environments with mythological elements. Features branching dialogue systems, cinematic cutscenes, and multiple endings based on player choices.",
      tags: ["Unreal", "Cinematics", "Dialogue"],
      gradient: "from-primary via-accent to-secondary",
      gameLink: "https://example.com/urban-legends",
      githubLink: "https://github.com/example/urban-legends",
    },
    {
      title: "Void Runner",
      description: "Endless runner with dynamic difficulty and power-ups",
      fullDescription: "A mobile-optimized endless runner with adaptive difficulty that responds to player skill. Includes an economy system, power-up mechanics, and monetization integration. Optimized for both iOS and Android platforms.",
      tags: ["Unity", "Mobile", "Monetization"],
      gradient: "from-accent to-primary",
      gameLink: "https://example.com/void-runner",
      githubLink: "https://github.com/example/void-runner",
    },
    {
      title: "Crystal Caves 3D",
      description: "Exploration game featuring custom 3D environments",
      fullDescription: "A web-based 3D exploration game built with Three.js and WebGL. Features custom-modeled environments created in Blender, real-time lighting, and interactive elements. Demonstrates the potential of browser-based 3D gaming.",
      tags: ["Blender", "Three.js", "WebGL"],
      gradient: "from-secondary to-accent",
      gameLink: "https://example.com/crystal-caves",
      githubLink: "https://github.com/example/crystal-caves",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A showcase of interactive worlds and gaming experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all overflow-hidden hover:shadow-[0_0_30px_rgba(100,150,100,0.3)] cursor-pointer">
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <ExternalLink className="text-primary" size={20} />
                    </div>
                    <div className="p-3 bg-card/20 rounded-full">
                      <Github className="text-foreground" size={20} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-card border-border max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary tracking-tight">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base leading-relaxed pt-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject?.tags.map((tag) => (
                  <span key={tag} className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="leading-relaxed mb-6">{selectedProject?.fullDescription}</p>
              <div className="flex gap-3">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(selectedProject?.gameLink, '_blank');
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Play Game
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(selectedProject?.githubLink, '_blank');
                  }}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
