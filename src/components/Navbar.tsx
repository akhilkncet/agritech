import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#themes", label: "Themes" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="flex items-center gap-1.5 sm:gap-2 font-display font-bold text-base sm:text-lg text-primary-foreground">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-agri-green" />
            <span>AgriTech <span className="text-agri-lime">3.0</span></span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-white/70 hover:text-agri-green transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNYG7dmK_k1QLV5G2nhs3oUZlzXUcvSidIxrdl6mxjZzOWDQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-full bg-agri-green text-primary-foreground font-semibold text-xs lg:text-sm hover:shadow-lg hover:shadow-agri-green/30 transition-all"
            >
              Register Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-agri-green py-2 px-2 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScNYG7dmK_k1QLV5G2nhs3oUZlzXUcvSidIxrdl6mxjZzOWDQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 mt-1 rounded-full bg-agri-green text-primary-foreground font-semibold text-sm text-center"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
