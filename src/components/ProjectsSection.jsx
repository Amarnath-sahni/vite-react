
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// ================= PROJECT DATA =================

const projects = [
  {
    id: 1,
    title: "SmartExpense AI",
    category: "Full Stack + AI",

    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],

    description:
      "AI-powered expense management system that helps users track, analyze and optimize their financial activities.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini AI",
      "Chart.js",
    ],

    features: [
      "AI based spending insights",
      "JWT authentication",
      "Interactive analytics dashboard",
      "Expense visualization",
      "Secure REST APIs",
    ],

    story:
      "Built a complete MERN financial management platform with AI integration for intelligent expense analysis and better budgeting decisions.",

    github:
      "https://github.com/Amarnath-sahni/Expense_Management_System-Backend-Frontend",

    live: "#",
  },

  {
    id: 2,
    title: "AI Brain Tumor Detection System",
    category: "AI + Full Stack",

    images: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    ],

    description:
      "Deep learning based healthcare system that detects brain tumors from MRI images using AI models.",

    techStack: [
      "React.js",
      "Node.js",
      "Python",
      "TensorFlow",
      "CNN",
      "MongoDB",
      "Docker",
    ],

    features: [
      "MRI image upload",
      "AI prediction model",
      "Confidence score generation",
      "Patient report management",
      "Secure API communication",
    ],

    story:
      "Developed an AI healthcare platform by integrating a CNN deep learning model with a full-stack application for automated MRI analysis.",

    github: "https://github.com/Amarnath-sahni/Brain_tumor_AI",

    live: "#",
  },

  {
    id: 3,
    title: "HomeStay Booking Platform",
    category: "Full Stack Web App",

    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
    ],

    description:
      "A hotel and home rental platform where users can list, search and book properties.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
    ],

    features: [
      "User authentication",
      "Property listing",
      "Reviews and ratings",
      "Booking management",
    ],

    story:
      "Created a scalable rental platform with authentication, property management and user review functionality.",

    github:
      "https://github.com/Amarnath-sahni/Hotel_Booking_System_adminPannel",

    live: "#",
  },

  {
    id: 4,
    title: "IRCTC UI Redesign",
    category: "Frontend Project",

    images: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    ],

    description:
      "Modern redesign of IRCTC booking interface focusing on better user experience.",

    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
    ],

    features: [
      "Modern UI",
      "Mobile responsive",
      "Reusable components",
      "Improved navigation",
    ],

    story:
      "Designed a clean and responsive train booking interface using reusable React components.",

    github: "https://github.com/Amarnath-sahni/IRTC",

    live: "#",
  },
];

// ================= PROJECT CARD =================

const ProjectCard = ({ project, index, openModal }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        bg-white/10
        backdrop-blur-lg
        border
        border-white/20
        rounded-3xl
        overflow-hidden
        cursor-pointer
        shadow-xl
      "
      onClick={() => openModal(project)}
    >
      {/* IMAGE */}

      <div className="h-52 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            hover:scale-110
            transition
            duration-500
          "
        />
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <span
          className="
            text-xs
            bg-yellow-400
            text-black
            px-3
            py-1
            rounded-full
          "
        >
          {project.category}
        </span>

        <h3
          className="
            text-2xl
            font-bold
            text-yellow-400
            mt-4
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-gray-300
            mt-3
            line-clamp-3
          "
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="
                text-xs
                bg-black/70
                px-3
                py-1
                rounded-md
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className="
            mt-5
            text-yellow-400
            font-semibold
          "
        >
          View Details →
        </button>
      </div>
    </motion.div>
  );
};

// ================= MAIN COMPONENT =================

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Current image in modal
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    setCurrentImage(0);
  };

  // Previous image
  const previousImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // Next image
  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="
        py-20
        bg-[#020617]
        text-white
        min-h-screen
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}

        <h2
          className="
            text-5xl
            font-bold
            text-center
            mb-5
          "
        >
          Projects
        </h2>

        <p
          className="
            text-center
            text-gray-300
            mb-12
          "
        >
          Explore my full-stack, AI and frontend projects
        </p>

        {/* PROJECT GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              openModal={openModal}
            />
          ))}
        </div>
      </div>

      {/* ================= PROJECT MODAL ================= */}

      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              bg-black/80
              backdrop-blur-sm
              flex
              items-center
              justify-center
              z-50
              p-5
            "
            onClick={closeModal}
          >
            <motion.div
              initial={{
                scale: 0.8,
                y: 50,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                y: 50,
              }}
              className="
                bg-[#0b1220]
                border
                border-white/20
                rounded-3xl
                max-w-4xl
                w-full
                max-h-[90vh]
                overflow-y-auto
                p-6
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}

              <div
                className="
                  flex
                  justify-between
                  items-center
                  mb-6
                "
              >
                <div>
                  <span
                    className="
                      bg-yellow-400
                      text-black
                      text-xs
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    {selectedProject.category}
                  </span>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      text-yellow-400
                      mt-3
                    "
                  >
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  onClick={closeModal}
                  className="
                    bg-white/10
                    p-3
                    rounded-full
                    hover:bg-white/20
                  "
                >
                  <FaTimes />
                </button>
              </div>

              {/* ================= IMAGE GALLERY ================= */}

              <div className="relative mb-8">
                <img
                  src={selectedProject.images[currentImage]}
                  alt={`${selectedProject.title} screenshot ${
                    currentImage + 1
                  }`}
                  className="
                    w-full
                    h-72
                    md:h-96
                    object-cover
                    rounded-2xl
                  "
                />

                {/* PREVIOUS */}

                {selectedProject.images.length > 1 && (
                  <button
                    onClick={previousImage}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      bg-black/60
                      hover:bg-black/80
                      p-3
                      rounded-full
                      transition
                    "
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                )}

                {/* NEXT */}

                {selectedProject.images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      bg-black/60
                      hover:bg-black/80
                      p-3
                      rounded-full
                      transition
                    "
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                )}

                {/* IMAGE COUNTER */}

                {selectedProject.images.length > 1 && (
                  <div
                    className="
                      absolute
                      bottom-4
                      left-1/2
                      -translate-x-1/2
                      bg-black/70
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {currentImage + 1} /{" "}
                    {selectedProject.images.length}
                  </div>
                )}
              </div>

              {/* ================= THUMBNAILS ================= */}

              <div className="flex gap-3 mb-8 overflow-x-auto">
                {selectedProject.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`
                      flex-shrink-0
                      w-20
                      h-14
                      rounded-lg
                      overflow-hidden
                      border-2
                      ${
                        currentImage === index
                          ? "border-yellow-400"
                          : "border-transparent"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </button>
                ))}
              </div>

              {/* DESCRIPTION */}

              <div className="mb-6">
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-2
                  "
                >
                  About Project
                </h3>

                <p
                  className="
                    text-gray-300
                    leading-relaxed
                  "
                >
                  {selectedProject.description}
                </p>
              </div>

              {/* TECH STACK */}

              <div className="mb-6">
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-3
                  "
                >
                  Tech Stack
                </h3>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        bg-black/70
                        border
                        border-white/10
                        px-3
                        py-2
                        rounded-lg
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}

              <div className="mb-6">
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-3
                  "
                >
                  Key Features
                </h3>

                <ul
                  className="
                    space-y-2
                    text-gray-300
                  "
                >
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        gap-2
                      "
                    >
                      <span className="text-yellow-400">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PROJECT STORY */}

              <div className="mb-8">
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-3
                  "
                >
                  Development Story
                </h3>

                <p
                  className="
                    text-gray-300
                    leading-relaxed
                  "
                >
                  {selectedProject.story}
                </p>
              </div>

              {/* BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                "
              >
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    bg-white
                    text-black
                    px-5
                    py-3
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  <FaGithub />
                  Github
                </a>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    bg-yellow-400
                    text-black
                    px-5
                    py-3
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
