import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            © 2024 Aadhar Wasti. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Crafting Worlds, One Game at a Time
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
