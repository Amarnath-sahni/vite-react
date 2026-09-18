// Footer.jsx
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-10 text-center"
    >
      <h2 className="text-xl font-semibold">Amarnath Sahni</h2>
      <p className="mt-2 text-sm">Open to opportunities in Full Stack & Software Development</p>
      <p className="mt-4 text-xs">&copy; 2025 Amarnath Sahni. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
