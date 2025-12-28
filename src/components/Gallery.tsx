import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import Particles from "./Particles";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import beastDrapedWhite from "@/assets/beast-draped-white.png";
import shortAnimationsThumb from "@/assets/short-animations-thumb.png";
import blenderModel from "@/assets/3d-model-blender.png";
import tigerIllustration from "@/assets/tiger-illustration.png";
import windowgirl from "@/assets/windowgirl.png";
import predator from "@/assets/predator.png";
import buddhas from "@/assets/buddhas.png";
import saitama from "@/assets/saitama.png";
import scattered from "@/assets/scattered.png";
import seasonsVideo from "@/assets/final.mp4";
import eyeLoopVideo from "@/assets/eyeloop.mp4";
import swayambhuVideo from "@/assets/Swayambhu.mp4";
import flowerLoopVideo from "@/assets/flowerloop.mp4";
import spiderConcepts from "@/assets/spider-concepts.png";
import dharaharaModel from "@/assets/dharahara-model.png";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const galleryItems = [
    {
      title: "Character Concepts",
      category: "Concept Art",
      image: beastDrapedWhite,
      description: "Original character designs blending fantasy elements with natural aesthetics. Exploring personality and narrative through form, color, and expression.",
      slideshowItems: [
        { media: beastDrapedWhite, type: "image", description: "" },
        { media: spiderConcepts, type: "image", description: "" }
      ],
    },
    {
      title: "Short Animations",
      category: "Animation",
      image: shortAnimationsThumb,
      description: "Short hand drawn animation sequences created in Blender Grease Pencil.",
      slideshowItems: [
        { media: seasonsVideo, type: "video", description: "Seasons: A short animation sequence showing the slippers i have owned for a year and its changing state as the seasons change" },
        { media: eyeLoopVideo, type: "video", description: "Eye experimental: An experimental animation loop" },
        { media: swayambhuVideo, type: "video", description: "A short animation of the prayer flags in Swayambhunath, a stupa in Kathmandu" },
        { media: flowerLoopVideo, type: "video", description: "Blossom: An experimental flower animation loop" }
      ],
    },
    {
      title: "3D Models",
      category: "3D assets",
      image: blenderModel,
      description: "Assets created in Blender",
      slideshowItems: [
        { media: blenderModel, type: "image", description: "" },
        { media: dharaharaModel, type: "image", description: "Dharahara Model for an interactive website" }
      ],
    },
    {
      title: "Illustrations",
      category: "Digital Art",
      image: tigerIllustration,
      description: "Digital illustrations and paintings. Exploring color, composition, and visual storytelling through 2D artwork and concept pieces.",
      slideshowItems: [
        { media: tigerIllustration, type: "image", description: "" },
        { media: windowgirl, type: "image", description: "" },
        { media: predator, type: "image", description: "" },
        { media: buddhas, type: "image", description: "" },
        { media: saitama, type: "image", description: "" },
        { media: scattered, type: "image", description: "" }
      ],
    },
  ];

  return (
    <section id="gallery" className="relative min-h-screen flex items-center py-20">
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
              Art Gallery
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Concept art, 3D models, and creative experiments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-center p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight drop-shadow-lg">{item.title}</h3>
                    <p className="text-sm text-foreground/90 tracking-wide drop-shadow-md">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-card border-border max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary tracking-tight">
              {selectedItem?.title}
            </DialogTitle>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm w-fit">
              {selectedItem?.category}
            </span>
          </DialogHeader>
          
          <div className="mt-4">
            <Carousel className="w-full">
              <CarouselContent>
                {selectedItem?.slideshowItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center justify-center p-6">
                      {item.type === "video" ? (
                        <video 
                          src={item.media} 
                          controls
                          className="max-h-[60vh] w-auto object-contain rounded-lg"
                          loop
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img 
                          src={item.media} 
                          alt={`${selectedItem.title} - ${index + 1}`}
                          className="max-h-[60vh] w-auto object-contain rounded-lg"
                        />
                      )}
                      {item.description && (
                        <p className="text-muted-foreground leading-relaxed mt-4 text-center max-w-2xl">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <p className="text-muted-foreground leading-relaxed mt-6">
              {selectedItem?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
