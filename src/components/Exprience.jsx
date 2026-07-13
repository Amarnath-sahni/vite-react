import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFileAlt, FaPhoneAlt, FaLock, FaBolt, FaServer } from "react-icons/fa";
import { FaNodeJs, FaReact, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";

// --- Data (sourced from resume) ---
const experiences = [
  {
    id: 1,
    type: "Internship",
    company: "Full Stack Developer Intern — Speqto Pvt. Ltd.",
    duration: "Dec 2025 – Feb 2026",
    techStack: [
      { name: "React.js", icon: FaReact },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "REST APIs", icon: FaServer },
    ],
    highlights: [
      "Built reusable React.js UI components adopted across multiple features, improving consistency and reducing duplicate front-end code.",
      "Implemented JWT authentication, protected routing, and paginated REST API endpoints for core application data.",
      "Collaborated with designers and stakeholders to translate business requirements into production-ready features.",
      "Improved component rendering performance using React.memo and lazy loading.",
    ],
  },
  {
    id: 2,
    type: "Internship",
    company: "MERN Stack Developer Intern — Q Spiders",
    duration: "Jul 2025 – Dec 2025",
    techStack: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
    ],
    highlights: [
      "Built full-stack applications end-to-end using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
      "Developed authentication systems and protected routes for database-driven features across multiple projects.",
      "Integrated frontend applications with REST APIs and backend services for real-world project deliverables.",
      "Optimized MongoDB queries with indexing to reduce average API response times.",
    ],
  },
];

// --- Reusable hover transition (gives the "lingering" feel) ---
const hoverSpring = { type: "spring", stiffness: 260, damping: 20, mass: 0.6 };

// --- Helper: Icon badge ---
const IconBadge = ({ Icon, label, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08, backgroundColor: "#ffffff" }}
    whileTap={{ scale: 0.97 }}
    transition={hoverSpring}
    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/90 text-black shadow-sm"
    aria-label={label}
  >
    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black text-lg shadow-sm">
      <Icon />
    </span>
    <span className="hidden sm:inline-block font-medium text-sm">{label}</span>
  </motion.button>
);

// --- Slide Panel (opens from right) ---
const TechSlide = ({ open, onClose, techName, highlights }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-full sm:w-[480px] z-50"
          >
            <div className="h-full bg-gradient-to-b from-black/90 via-[#0b1220]/80 to-black/95 backdrop-blur-md border-l border-white/10 p-6 overflow-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{techName}</h3>
                  <p className="text-sm text-gray-300 mt-1">What I worked on with this stack</p>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                  transition={hoverSpring}
                  className="p-2 rounded-md bg-white/10"
                  aria-label="Close panel"
                >
                  <FaTimes className="text-white" />
                </motion.button>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Highlights</h4>
                <ul className="list-disc pl-5 text-sm text-gray-200 space-y-2">
                  {highlights.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, backgroundColor: "#f3f4f6" }}
                  transition={hoverSpring}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-white text-black font-medium shadow"
                >
                  <FaPhoneAlt /> Let's talk about this
                </motion.a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---
export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [slideOpen, setSlideOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState({ name: "", highlights: [] });

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openTechSlide = (techName, highlights) => {
    setSelectedTech({ name: techName, highlights });
    setSlideOpen(true);
  };

  const closeTechSlide = () => setSlideOpen(false);

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#020617] via-[#070b12] to-[#04060a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">Experience</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Two internships building production features across the MERN stack. Click a technology
          badge to see exactly what I shipped with it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.25)" }}
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/6 shadow-lg"
            >
              {/* Top row: Type + Company */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-widest">{exp.type}</p>
                  <h3 className="text-xl font-bold mt-1">{exp.company}</h3>
                  <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
                </div>

                <motion.button
                  onClick={() => toggleDetails(index)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.14)" }}
                  transition={hoverSpring}
                  className="shrink-0 px-3 py-2 rounded-lg text-sm bg-white/6"
                >
                  {openIndex === index ? "Hide" : "View"}
                </motion.button>
              </div>

              {/* Content */}
              <div className="mt-5 space-y-4">
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {exp.techStack.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <IconBadge
                        key={i}
                        Icon={Icon}
                        label={t.name}
                        onClick={() => openTechSlide(t.name, exp.highlights)}
                      />
                    );
                  })}
                </div>

                {/* Expandable details */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 rounded-lg bg-white/3 border border-white/6 text-sm text-gray-100">
                        <h4 className="font-semibold mb-2">Key Highlights</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.highlights.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                        <p className="mt-3 text-xs text-gray-300">
                          Click any technology badge above to see it in its own panel.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Slide panel component */}
      <TechSlide
        open={slideOpen}
        onClose={closeTechSlide}
        techName={selectedTech.name}
        highlights={selectedTech.highlights}
      />
    </section>
  );
}
