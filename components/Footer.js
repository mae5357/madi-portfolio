import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6 bg-base-light">
      <div className="max-w-4xl px-10 mx-auto text-base-dark">
        <div className="pb-8 mb-2 border-t-2 border-base-highlight"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind and Netify</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://www.linkedin.com/in/madison-ebersole/"
              className={"transition-colors hover:text-base-peach"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mae5357/madi-portfolio"
              className={"transition-colors hover:text-base-peach"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
