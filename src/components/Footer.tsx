import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 sm:py-12 bg-black/90 border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 justify-center sm:justify-start">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-agri-green" />
            <span className="font-display font-bold text-base sm:text-lg text-white">AgriTech <span className="text-agri-lime">3.0</span></span>
          </div>
          <p className="text-white/50 text-xs sm:text-sm">
            Innovating the Future of Agriculture through Technology
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-display font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Quick Links</h3>
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <a href="#about" className="text-white/50 hover:text-agri-green text-xs sm:text-sm transition-colors">About</a>
            <a href="#gallery" className="text-white/50 hover:text-agri-green text-xs sm:text-sm transition-colors">Gallery</a>
            <a href="#themes" className="text-white/50 hover:text-agri-green text-xs sm:text-sm transition-colors">Themes</a>
            <a href="#timeline" className="text-white/50 hover:text-agri-green text-xs sm:text-sm transition-colors">Timeline</a>
            <a href="#prizes" className="text-white/50 hover:text-agri-green text-xs sm:text-sm transition-colors">Prizes</a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="font-display font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Contact</h3>
          <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-white/50 justify-center sm:justify-start">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="tel:8637446635" className="hover:text-agri-green transition-colors">8637446635</a>
            </div>
            <div className="flex items-center gap-2 text-white/50 justify-center sm:justify-start">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="tel:6382812074" className="hover:text-agri-green transition-colors">6382812074</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 sm:pt-6 text-center">
        <p className="text-white/30 text-[10px] sm:text-xs">
          © 2026 AgriTech 3.0. All rights reserved. | March 16-17, 2026
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
