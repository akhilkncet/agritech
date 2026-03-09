import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";

const RegisterCTA = () => (
  <section
    id="register"
    className="py-16 sm:py-24 lg:py-32 bg-agri-gradient relative overflow-hidden"
  >
    {/* Particles */}
    <ParticlesBg id="cta-particles" density={30} speed={0.4} color="#84cc16" linked={false} />

    {/* Glow orbs */}
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-agri-green/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-agri-lime/10 rounded-full blur-[80px]" />

    <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 px-4"
      >
        Join AgriTech 3.0 and Build the
        <br className="hidden sm:block" />
        <span className="text-gradient"> Future of Smart Farming</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-white/50 mb-8 sm:mb-10 max-w-lg mx-auto text-xs sm:text-sm md:text-base px-4"
      >
        Register now and be part of the biggest agriculture innovation hackathon. Limited spots available!
      </motion.p>

      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLScNYG7dmK_k1QLV5G2nhs3oUZlzXUcvSidIxrdl6mxjZzOWDQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="inline-block px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-agri-green text-primary-foreground font-display font-bold text-base sm:text-lg glow-green animate-pulse_glow"
      >
        Register Now →
      </motion.a>
    </div>
  </section>
);

export default RegisterCTA;
