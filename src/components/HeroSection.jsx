import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFileAlt, FaGithub, FaReact, FaNodeJs, FaDatabase, FaCode, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <motion.section
     className="min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 py-10 md:py-0 relative overflow-hidden"
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Tech Icons */}
     {/* Floating Tech Icons - Top Left */}
<motion.div
  className="absolute top-10 left-10 text-4xl text-cyan-400 opacity-80"
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 3 }}
>
  <FaReact />
</motion.div>

<motion.div
  className="absolute top-20 left-20 text-4xl text-green-500 opacity-80"
  animate={{ y: [0, -15, 0] }}
  transition={{ repeat: Infinity, duration: 3.5 }}
>
  <SiMongodb />
</motion.div>

<motion.div
  className="absolute top-32 left-10 text-4xl text-green-400 opacity-80"
  animate={{ y: [0, -12, 0] }}
  transition={{ repeat: Infinity, duration: 4 }}
>
  <FaNodeJs />
</motion.div>

{/* Floating Tech Icons - Top Right */}
<motion.div
  className="absolute top-10 right-10 text-4xl text-yellow-400 opacity-80"
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 3 }}
>
  <FaGitAlt />
</motion.div>

<motion.div
  className="absolute top-20 right-20 text-4xl text-pink-400 opacity-80"
  animate={{ y: [0, -15, 0] }}
  transition={{ repeat: Infinity, duration: 3.5 }}
>
  <FaCode />
</motion.div>

<motion.div
  className="absolute top-32 right-10 text-4xl text-indigo-400 opacity-80"
  animate={{ y: [0, -12, 0] }}
  transition={{ repeat: Infinity, duration: 4 }}
>
  <FaReact />
</motion.div>


      {/* Profile Image */}
      <div className="relative mb-6 md:mb-0 md:mr-10">
        {/* Glow behind the picture */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-cyan-400 to-pink-400 blur-2xl"
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.img
          src="AmarnathPic.jpg"
          alt="Amarnath Sahni"
          className="relative w-40 h-60 md:w-64 md:h-64 object-cover rounded-full shadow-xl/30 border-4 border-amber-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Text & Buttons */}
      <div className="text-center md:text-left max-w-xl">
        {/* Name & Role */}
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          👋 Hey, I'm <span className="text-yellow-400">Amarnath Sahni</span>
          <span className="block text-blue-200 mt-1 text-lg md:text-xl">
            <Typewriter
              words={["A Software Developer", "MERN Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h2>

        {/* Description */}
        <h2 className="text-xl md:text-2xl text-gray-300 mt-3 font-light leading-relaxed tracking-wide">
          I'm a <span className="text-yellow-400 font-semibold">Software Developer</span> with hands-on experience across the full <span className="text-yellow-400 font-semibold">MERN stack</span>, building authentication systems, REST APIs, and AI-integrated web applications.
        </h2>

        <p className="mt-4 text-lg text-blue-200 font-medium border-l-4 border-yellow-400 pl-4 italic bg-amber-950">
          1st place hackathon winner and 300+ LeetCode problems solved — I turn ideas into seamless, production-ready web experiences.
        </p>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <motion.a
            href="tel:+919142511468"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", boxShadow: "0 0 15px rgba(34,211,238,0.5)" }}
            className="flex items-center justify-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow transition-colors duration-300 hover:text-cyan-300"
          >
            <FaPhoneAlt className="mr-2" /> +91 91425 11468
          </motion.a>
          <motion.a
            href="mailto:amarnathgithub@gmail.com"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", boxShadow: "0 0 15px rgba(250,204,21,0.5)" }}
            className="flex items-center justify-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow transition-colors duration-300 hover:text-yellow-300"
          >
            <FaEnvelope className="mr-2" /> Email Me
          </motion.a>
          <motion.a
            href="https://wa.me/919142511468"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", boxShadow: "0 0 15px rgba(34,197,94,0.5)" }}
            className="flex items-center justify-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow transition-colors duration-300 hover:text-green-400"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/11MkyNa5c6u2jW5kIWL8HpQ6UQ0O62nxV/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", boxShadow: "0 0 15px rgba(244,114,182,0.5)" }}
            className="flex items-center justify-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow transition-colors duration-300 hover:text-pink-300"
          >
            <FaFileAlt className="mr-2" /> View CV
          </motion.a>
          <motion.a
            href="https://github.com/Amarnath-sahni"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", boxShadow: "0 0 15px rgba(255,255,255,0.4)" }}
            className="flex items-center justify-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow transition-colors duration-300 hover:text-gray-100"
          >
            <FaGithub className="mr-2" /> GitHub
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/Amarnath_sahni/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", boxShadow: "0 0 15px rgba(249,115,22,0.5)" }}
            className="flex items-center justify-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow transition-colors duration-300 hover:text-orange-400"
          >
            <SiLeetcode className="mr-2" /> LeetCode
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
