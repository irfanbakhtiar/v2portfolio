import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className="text-center py-5"
    >
      {/* Footer content */}
      <span className="block pt-1 text-xs md:text-sm text-slate-500">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/m-irfan-bakhtiar/"
          target="_blank"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
        >
          Muhammad Irfan Bakhtiar
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
          target="_blank"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
          target="_blank"
        >
          Tailwind CSS
        </a>
        .
      </span>
    </motion.div>
  );
};

export default Footer;
