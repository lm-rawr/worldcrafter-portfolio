import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const galleryItems = [
    {
      title: "Environment Design",
      category: "3D Art",
      gradient: "from-primary via-accent to-secondary",
      description: "Lush forest environments with dynamic lighting and atmospheric effects. Created using Blender and Unity, these scenes showcase detailed foliage systems and realistic terrain generation.",
    },
    {
      title: "Character Concepts",
      category: "Concept Art",
      gradient: "from-accent to-primary",
      description: "Original character designs blending fantasy elements with natural aesthetics. Detailed sketches and digital paintings exploring personality through form and color.",
    },
    {
      title: "Animations",
      category: "Animation",
      gradient: "from-secondary to-accent",
      description: "Fluid character animations and environmental effects. Motion capture integration and procedural animation systems for realistic movement and interaction.",
    },
    {
      title: "Particle Effects",
      category: "VFX",
      gradient: "from-primary to-secondary",
      description: "Nature-inspired particle systems including magic effects, weather simulations, and environmental atmospherics. Created using Unity's VFX Graph and custom shaders.",
    },
    {
      title: "Weapon Models",
      category: "3D Assets",
      gradient: "from-accent via-primary to-secondary",
      description: "Detailed 3D weapon models with PBR texturing. Optimized for real-time rendering with multiple LOD levels and modular design systems.",
    },
    {
      title: "Level Layouts",
      category: "Level Design",
      gradient: "from-secondary via-accent to-primary",
      description: "Strategic level designs focusing on player flow and environmental storytelling. Includes top-down layouts, encounter design, and pacing documentation.",
    },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Art Gallery
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Concept art, 3D models, and creative experiments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
            >
              <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(100,150,100,0.3)]">
                <div
                  className={`relative h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-background/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-center p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-foreground/80 tracking-wide">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground leading-relaxed">
            More artwork available on{" "}
            <a
              href="#"
              className="text-primary hover:text-accent transition-colors underline"
            >
              ArtStation
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-primary hover:text-accent transition-colors underline"
            >
              Sketchfab
            </a>
          </p>
        </motion.div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary tracking-tight">
              {selectedItem?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base leading-relaxed pt-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                {selectedItem?.category}
              </span>
              <p className="mt-2 leading-relaxed">{selectedItem?.description}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
