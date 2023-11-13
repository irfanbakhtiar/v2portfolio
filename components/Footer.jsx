import React from "react";

const Footer = () => {
  return (
    <div className="text-center py-5">
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
    </div>
  );
};

export default Footer;
