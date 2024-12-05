import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import icons
import Link from "next/link";
import Image from "next/image";
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
            href="https://wa.me/628126204007"
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
      {/* <div>
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div> */}
    </section>
  );
};

export default EmailSection;
