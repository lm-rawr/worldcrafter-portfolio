import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import Particles from "./Particles";
import mindEaterImg from "@/assets/mindeater.png";
import earthquakeMuseumImg from "@/assets/earthquake-museum.png";
import afterDeathImg from "@/assets/afterdeath.png";
import spaceInvadersImg from "@/assets/space-invaders.png";
import normanImg from "@/assets/norman.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "MindEater",
      description: "2D Metroidvania/rogue-like about a spider trying to look for its lost memories",
      fullDescription: "'MindEater' follows the story of Spoof, who ventures through a diverse apocalyptic world looking for his past. The user plays as the spider exploring places and defeating enemies while uncovering what mystery lies behind.",
      tags: ["Unity", "C#", "2D"],
      image: mindEaterImg,
      gameLink: "https://example.com/mindeater",
      githubLink: "https://github.com/example/mindeater",
    },
    {
      title: "Earthquake Museum",
      description: "Interactive 3D website that hosts different stories about the 2015 Nepal earthquake",
      fullDescription: "'Earthquake Museum' was built to showcase a plethora of events that happened during and after the 2015 Nepal earthquake on its 10 year anniversary in 2025. It hosts several stories covered by the Nepali Times.",
      tags: ["p5.js", "THREE.js", "Blender"],
      image: earthquakeMuseumImg,
      gameLink: "https://example.com/earthquake-museum",
      githubLink: "https://github.com/example/earthquake-museum",
    },
    {
      title: "AfterDeath",
      description: "Animated Audio-Visual Comic dealing with Hindu concepts of sin, death, and afterlife",
      fullDescription: "'AfterDeath' is a short comic that uses image detection to play animations in different pages adjacent to an illustration. It cleverly plays with the concept of revelation in the afterlife revealing the outcome of each animation after the page is turned.",
      tags: ["p5.js", "teachable-machine", "interactive"],
      image: afterDeathImg,
      gameLink: "https://example.com/afterdeath",
      githubLink: "https://github.com/example/afterdeath",
    },
    {
      title: "Space Invaders",
      description: "The Classic Arcade Game of Space Invaders",
      fullDescription: "'Space Invaders' follows the classic battleship 2D pixel game, where you try to survive as long as you can on a spaceship while being invaded by enemies. It uses simple movement and shooting mechanics.",
      tags: ["python", "processing", "2D"],
      image: spaceInvadersImg,
      gameLink: "https://example.com/space-invaders",
      githubLink: "https://github.com/example/space-invaders",
    },
    {
      title: "Norman",
      description: "A robot build for a collaborative all-robot play",
      fullDescription: "'Norman' or 'Robocorp' is a robot designed for the all robot play 'RoboLove', which was performed in the exhibition 'Robot Island' in NYAUD Arts Centre. Powered by Arduino, its movements and sounds are controlled and triggered using two remote controllers.",
      tags: ["arduino", "wood-building", "remote-control"],
      image: normanImg,
      gameLink: "https://example.com/norman",
      githubLink: "https://github.com/example/norman",
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-20 bg-muted/20">
      <Particles />
      <div className="container mx-auto px-6 relative z-10">
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
                <div className="h-48 relative overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
