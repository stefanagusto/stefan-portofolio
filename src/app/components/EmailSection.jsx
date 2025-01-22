import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import icons
import { IoMdMail } from "react-icons/io";

const EmailSection = () => {
  return (
    // <section className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-16">
    <section
      id="contact"
      className="flex flex-col items-center justify-center mt-24 text-center"
    >
      {/* <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 hover:bg-slate-200">
          Let&apos;s Connect
        </h5>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/stefanhutapea/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 ease-out border-2 border-white rounded-full hover:bg-gradient-to-br from-secondary-500 to-primary-500 "
          >
            <FaLinkedin className="text-xl text-white" />
          </a>
          <a
            href="https://github.com/stefanagusto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 ease-out border-2 border-white rounded-full hover:bg-gradient-to-br from-secondary-500 to-primary-500 "
          >
            <FaGithub className="text-xl text-white" />
          </a>
          <a
            href="https://wa.me/6281262044007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 ease-out border-2 border-white rounded-full hover:bg-gradient-to-br from-secondary-500 to-primary-500 "
          >
            <FaWhatsapp className="text-xl text-white" />
          </a>
          <a
            href="mailto:stefanhutapea@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 ease-out border-2 border-white rounded-full hover:bg-gradient-to-br from-secondary-500 to-primary-500 "
          >
            <IoMdMail className="text-xl text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
