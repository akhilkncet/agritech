import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, FileText, Users, Code, Wrench, Presentation, Award, Trophy } from "lucide-react";

const day1 = [
  { icon: Mic, label: "Opening Ceremony", time: "9:00 AM" },
  { icon: FileText, label: "Problem Statements Announced", time: "9:30 AM" },
  { icon: Users, label: "Team Formation & Planning", time: "10:00 AM" },
  { icon: Code, label: "Hackathon Begins - Development Phase", time: "10:30 AM" },
  { icon: Wrench, label: "Mentor Support & Development", time: "2:00 PM" },
];

const day2 = [
  { icon: Code, label: "Development Continues", time: "9:00 AM" },
  { icon: Wrench, label: "Final Mentor Sessions", time: "11:00 AM" },
  { icon: Presentation, label: "Project Presentations Begin", time: "2:00 PM" },
  { icon: Award, label: "Judging & Evaluation", time: "3:30 PM" },
  { icon: Trophy, label: "Winners Announcement & Closing", time: "4:30 PM" },
];

const TimelineDay = ({ title, events, delay = 0 }: { title: string; events: typeof day1; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay }}
        className="font-display font-bold text-agri-green text-lg sm:text-xl mb-6 sm:mb-8 text-center"
      >
        {title}
      </motion.h3>
      <div className="relative">
        {/* Line */}
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-agri-green/20 hidden sm:block" />
        <div className="space-y-3 sm:space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay + i * 0.1 }}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0 group-hover:glow-border transition-all z-10">
                <event.icon className="w-4 h-4 sm:w-5 sm:h-5 text-agri-green" />
              </div>
              <div className="glass-card px-3 sm:px-5 py-2 sm:py-3 flex-1 group-hover:glow-border transition-all">
                <span className="text-[10px] sm:text-xs text-agri-lime font-medium block">{event.time}</span>
                <p className="text-white text-xs sm:text-sm font-medium mt-0.5">{event.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => (
  <section id="timeline" className="py-16 sm:py-24 lg:py-32 bg-section-dark">
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-12 sm:mb-16 px-4"
      >
        Event <span className="text-gradient">Timeline</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        <TimelineDay title="Day 1 — March 16" events={day1} />
        <TimelineDay title="Day 2 — March 17" events={day2} delay={0.3} />
      </div>
    </div>
  </section>
);

export default TimelineSection;
