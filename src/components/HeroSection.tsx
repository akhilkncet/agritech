import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CountdownTimer = () => {
  const targetDate = new Date("2026-03-16T09:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-1.5 sm:gap-2 md:gap-3 justify-center items-end flex-wrap">
      {units.map((unit) => (
        <div key={unit.label} className="glass-card flex flex-col items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] h-[60px] sm:h-[68px] md:h-[76px]">
          <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-agri-green flex items-end" style={{height:'1.6em'}}>
            {unit.label === "Hours" && unit.value === 0 ? "00" : String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-[9px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-0.5 sm:mt-1">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-agri-gradient px-4 py-20">
    <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-3 py-1.5 rounded-full glass text-[10px] sm:text-xs md:text-sm font-medium text-agri-green mb-4 sm:mb-6 tracking-wider uppercase leading-relaxed">
          March 16–17, 2026 • Agriculture Innovation Hackathon
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6"
      >
        <span className="text-white">AgriTech </span>
        <span className="text-gradient">3.0</span>
        <br />
        <span className="text-white/80 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2 block">
          Innovating the Future of Agriculture
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
      >
        A two-day agriculture innovation hackathon (March 16–17, 2026), running from 9:00 AM to 5:00 PM each day. Students, developers, engineers, and innovators collaborate to create technological solutions for real agricultural challenges.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mb-8 sm:mb-10"
      >
        <CountdownTimer />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScNYG7dmK_k1QLV5G2nhs3oUZlzXUcvSidIxrdl6mxjZzOWDQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-agri-green text-primary-foreground font-display font-bold text-base sm:text-lg glow-green hover:scale-105 transition-transform"
        >
          Register Now
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-white/30">
          <ChevronDown className="w-5 h-5 animate-scroll_indicator" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
