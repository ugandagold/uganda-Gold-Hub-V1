import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Delivered what we needed on time, with professionalism. Their team made the entire process seamless from start to finish.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Liam James",
    role: "Project Manager, Mining CORE",
  },
  {
    text: "Their team's deep technical expertise, innovative thinking and hands-on approach made a huge difference in our complex project.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Noah Alexander",
    role: "Operations Lead, ResourceWorks",
  },
  {
    text: "Experience backed by real trust. We have found a partner that values integrity as much as yield.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    name: "Leon Eskenedy",
    role: "Director, Global Metals",
  },
  {
    text: "The purity of the bullion we received was exactly as assayed. Uganda Gold Hub is now our primary supplier for raw materials.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Sarah Jenkins",
    role: "Procurement, Aurum Jewelry",
  },
  {
    text: "Navigating export regulations in East Africa used to be a headache. These guys handle everything with complete transparency.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    name: "David Chen",
    role: "Supply Chain Dir, TechComponents",
  },
  {
    text: "Their commitment to ethical sourcing is verifiable. It aligns perfectly with our ESG goals for investment portfolios.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Elena Rodriguez",
    role: "VP, Sovereign Wealth Fund",
  },
  {
    text: "We've seen a tangible improvement in our local community infrastructure thanks to their fair trade initiatives.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop",
    name: "Michael Omondi",
    role: "Community Liaison",
  },
  {
    text: "Logistics are always a challenge in this region, but their secure transport protocols are world-class.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Robert Stone",
    role: "Logistics Coord, SecureTrans",
  },
  {
    text: "Consistent quality in raw dust shipments allows us to refine with predictable yields. Highly recommended.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    name: "Wei Zhang",
    role: "Manager, Eastern Refinery",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const SectionTestimonials = () => {
  return (
    <section className="bg-stone-50 py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-amber-200 bg-amber-50 text-amber-700 py-1 px-4 rounded-full text-xs font-bold uppercase tracking-widest">Testimonials</div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Trusted by Global Partners
          </h2>
          <p className="text-stone-500 mt-4 text-lg font-light max-w-md mx-auto">
            From artisanal miners to international bullion banks, see what our network has to say.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;