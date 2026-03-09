import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Who can participate?", a: "Students, developers, designers, engineers, and agriculture enthusiasts. Teams of 2–4 members." },
  { q: "Do I need prior agriculture experience?", a: "No! We welcome participants from all backgrounds. The hackathon is about innovating with technology." },
  { q: "Is the hackathon offline or online?", a: "AgriTech 3.0 is an in-person event held over two days (March 16–17, 2026), 9:00 AM–5:00 PM each day." },
  { q: "What should participants bring?", a: "Bring your laptop, charger, student/government ID, and enthusiasm. We'll provide meals, Wi-Fi, and mentorship." },
  { q: "Can beginners participate?", a: "Absolutely! We encourage beginners to participate. Mentors will be available throughout the event." },
  { q: "Is there a registration fee?", a: "No, participation in AgriTech 3.0 is completely free." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 sm:py-32 bg-agri-gradient">
    <div className="max-w-3xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white text-center mb-16"
      >
        Frequently Asked <span className="text-gradient">Questions</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-white text-left font-display hover:text-agri-green hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
