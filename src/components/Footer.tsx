import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Aadhar Wasti. All rights reserved. Made with <Heart className="w-4 h-4 fill-primary text-primary" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
