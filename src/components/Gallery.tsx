import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Environment Design",
      category: "3D Art",
      gradient: "from-primary via-accent to-secondary",
    },
    {
      title: "Character Concepts",
      category: "Concept Art",
      gradient: "from-accent to-primary",
    },
    {
      title: "UI/UX Mockups",
      category: "Interface Design",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Particle Effects",
      category: "VFX",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Weapon Models",
      category: "3D Assets",
      gradient: "from-accent via-primary to-secondary",
    },
    {
      title: "Level Layouts",
      category: "Level Design",
      gradient: "from-secondary via-accent to-primary",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Art Gallery
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
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
            >
              <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                <div
                  className={`relative h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-background/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/80">{item.category}</p>
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
          <p className="text-muted-foreground">
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
    </section>
  );
};

export default Gallery;
