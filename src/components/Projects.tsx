import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neon Pulse",
      description: "Fast-paced cyberpunk action game with dynamic combat systems",
      tags: ["Unity", "C#", "Multiplayer"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Mystic Realms",
      description: "Fantasy RPG featuring procedural world generation",
      tags: ["Unreal", "Blueprint", "AI"],
      gradient: "from-accent to-secondary",
    },
    {
      title: "Quantum Shift",
      description: "Puzzle platformer exploring time manipulation mechanics",
      tags: ["Unity", "Shader", "Physics"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Urban Legends",
      description: "Narrative-driven adventure in a modern fantasy setting",
      tags: ["Unreal", "Cinematics", "Dialogue"],
      gradient: "from-primary via-accent to-secondary",
    },
    {
      title: "Void Runner",
      description: "Endless runner with dynamic difficulty and power-ups",
      tags: ["Unity", "Mobile", "Monetization"],
      gradient: "from-accent to-primary",
    },
    {
      title: "Crystal Caves 3D",
      description: "Exploration game featuring custom 3D environments",
      tags: ["Blender", "Three.js", "WebGL"],
      gradient: "from-secondary to-accent",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
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
            >
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] cursor-pointer">
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-primary rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="text-primary-foreground" size={20} />
                    </button>
                    <button className="p-3 bg-card rounded-full hover:scale-110 transition-transform">
                      <Github className="text-foreground" size={20} />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
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
    </section>
  );
};

export default Projects;
