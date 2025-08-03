"use client";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa"; // Import icons
import { IoMdMail } from "react-icons/io";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div className="col-span-5 mt-8 mb-4 place-self-center lg:mt-12">
          <div className="px-[2px] py-[2px] rounded-full bg-[#ffffff] w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] relative ">
            <span className="block bg-[#121212]  rounded-full w-[176px] h-[176px] lg:w-[196px] lg:h-[196px] relative ease-in-out duration-200">
              <Image
                src="/images/Stefan.jpg"
                alt="heroimage"
                fill
                className="absolute object-cover w-full h-full translate-x-0 rounded-full" // adjust translate-x-4 as needed
                style={{ objectPosition: 'center 80%' }}
                priority
              />
            </span>
          </div>
        </div>
        <div className="col-span-7 text-center place-self-center sm:text-center">
          <h1 className="mb-4 text-2xl font-extrabold tsext-white sm:text-5xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 hover:bg-slate-200">
              Hello, I&apos;m Stefan Agusto{" "}
            </span>
            <br />
            <p> a Product Manager</p>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-12 lg:text-xl sm:mt-12 sm:max-w-[800px] font-thin">
            I&apos;m a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 hover:bg-slate-200">
              {" "}
              Product Manager
            </span>{" "}
            and{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 hover:bg-slate-200">
              {" "}
              Software Engineer
            </span>{" "}
            with experience in leading and managing projects across web and 
            mobile platforms. I have a strong background in Swift, SwiftUI, AR/VR, and 
            machine learning, having developed several iOS applications. My passion lies 
            in creating innovative technology solutions, collaborating with diverse teams, 
            and driving impactful product outcomes.
          </p>
          <div>
            <a href="https://wa.me/6281262044007" target="_blank">
              <button className="w-full px-6 py-3 mr-4 text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200">
                Hire me
              </button>
            </a>
            <a href="/stefanagusto_cv.pdf" download="CV - Stefan Hutapea.pdf">
              <button className="px-[2px] py-[2px] w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">
                  Download CV
                </span>
              </button>
            </a>
          </div>

          {/* Social Media Icons */}
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
              href="mailto:stefanhutapea@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 ease-out border-2 border-white rounded-full hover:bg-gradient-to-br from-secondary-500 to-primary-500 "
            >
              <IoMdMail className="text-xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
