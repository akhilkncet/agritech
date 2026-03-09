import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tractor, Wifi, BrainCircuit, Leaf, CloudSun, Truck } from "lucide-react";

const themes = [
  {
    icon: Wifi,
    title: "Drones and IoT in Agriculture",
    desc: "Farmers face difficulty in monitoring large agricultural fields for crop health, pest infestation, irrigation needs and nutrient deficiencies. Traditional manual inspection is time-consuming, labor-intensive and often inaccurate, leading to delayed decisions and reduced crop productivity. There is a need for an integrated drone and IoT-based system that can collect real-time data from fields, analyze crop conditions, provide timely recommendations to farmers for precision agriculture and efficient farm management."
  },
  {
    icon: Tractor,
    title: "Designing of Farm Implements and Landscaping",
    desc: "Many small and medium-scale farmers lack access to affordable, efficient, and ergonomic farm implements for land preparation, planting, weeding and landscaping. Existing machinery is often expensive, fuel-dependent, and unsuitable for small farms or uneven terrains. There is a need to design innovative, low-cost and energy-efficient farm implements that improve farming efficiency, reduce labor dependency, support sustainable agricultural landscaping practices."
  },
  {
    icon: CloudSun,
    title: "Water Quality Management in Agriculture",
    desc: "Poor water quality used in irrigation can negatively affect soil fertility, crop growth and food safety. Many farmers are unaware of the chemical and biological contaminants present in irrigation water, such as excess salts, heavy metals, pesticides, or harmful microorganisms. There is a need for an efficient system to monitor, analyze and manage irrigation water quality in real time to ensure safe agricultural practices, protect soil health and improve crop productivity."
  },
];

const ThemesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="themes" className="py-16 sm:py-24 lg:py-32 bg-agri-gradient relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
            Hackathon <span className="text-gradient">Themes</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-xs sm:text-sm px-4">Three key problem areas in agriculture technology - select one to focus your solution on</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl p-6 sm:p-8 border-2 border-agri-green/40 bg-gradient-to-br from-agri-green/10 via-agri-lime/5 to-transparent shadow-lg group hover:border-agri-green hover:bg-agri-green/20 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Blurred background image */}
              <img
                src={`/1.webp`.replace('1', `${i+1}`)}
                alt={theme.title + ' background'}
                className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 z-0"
                style={{borderRadius: 'inherit'}}
              />
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-agri-green via-agri-lime to-transparent opacity-40 group-hover:opacity-70 transition-all z-10" />
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 bg-agri-green/20 group-hover:bg-agri-green/40 transition-colors shadow-md">
                  <theme.icon className="w-6 h-6 sm:w-8 sm:h-8 text-agri-green group-hover:text-agri-lime transition-colors" />
                </div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg md:text-xl mb-2 sm:mb-3 tracking-tight group-hover:text-agri-lime transition-colors">{theme.title}</h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed text-left group-hover:text-agri-green transition-colors">{theme.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
