"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Nyanting",
    description:
      "Nyanting offers real-time guidance, enhances accuracy, and provides a more accessible learning environment for both beginners and seasoned artisans, using Apple Watch as companion during the process with reminders and feedback.",
    image: "/images/projects/nyanting.png",
    tag: ["All", "Mobile"],
    techStack: ["Swift", "Machine Learning", "Vision", "Apple Watch", "Product Management"],
    link: "", // Add your link manually
    github: "https://github.com/Alas-Purwo/nyanting",
  },
  {
    id: 2,
    title: "MediSign",
    description:
      "Medisign is an app that simplifies communication for deaf patients by using predefined options and machine learning, and engage in meaningful discussions with doctors during consultations. Built with Swift for iOS.",
    image: "/images/projects/medisign.png",
    tag: ["All", "Mobile"],
    techStack: ["Swift", "iOS", "Machine Learning"],
    link: "https://github.com/Kurniakun17/MediSign",
    github: "https://github.com/Kurniakun17/MediSign",
  },
  {
    id: 3,
    title: "Penguin Survival: 'Don't Slip'",
    description:
      "A 2D survival game where a penguin must navigate a melting iceberg using tilt controls and tap to jump, while avoiding obstacles. Built with Apple's SpriteKit framework for iOS devices.",
    image: "/images/projects/penguin.png",
    tag: ["All", "Mobile"],
    techStack: ["SpriteKit", "Swift", "Game Design", "Mobile Game Development"],
    link: "https://github.com/althafnafi/dont-slip",
    github: "https://github.com/althafnafi/dont-slip",
  },
  {
    id: 4,
    title: "GymBro",
    description:
      "A weightlifting calculator app designed for strength training enthusiasts. The app tracks weightlifting progress and calculates 1 Rep Max using various formulas. Built with Swift for iOS with support for dark mode and localization.",
    image: "/images/projects/gymbro1.png",
    tag: ["All", "Mobile"],
    techStack: ["Swift", "iOS", "Product Management"],
    link: "https://github.com/stefanagusto/GymBro",
    github: "https://github.com/stefanagusto/GymBro",
  },
  {
    id: 5,
    title: "Summer",
    description:
      "An innovative iPad app designed to record, transcribe, and summarize meetings in real-time. Built with Apple's Speech Framework, this app ensures you never miss an important point during your meetings.",
    image: "/images/projects/summer.png",
    tag: ["All", "Mobile"],
    techStack: ["Swift", "Machine Learning", "Speech Framework"],
    link: "https://medium.com/@stefanhutapea/reinventing-meeting-summaries-with-summer-e6ce7c7dc334",
    github: "https://github.com/stefanagusto/Summer",
  },
  {
    id: 6,
    title: "BolaDragon",
    description:
      "An immersive AR-based mobile game that uses ARKit to allow players to find and collect hidden Dragon Balls by following challenges and clues. A mix of augmented reality and treasure hunt mechanics.",
    image: "/images/projects/ball1.png",
    tag: ["All", "Mobile"],
    techStack: ["ARKit", "SwiftUI", "RealityKit", "Virtual Reality"],
    link: "https://github.com/Y0urPet/NC1_BolaDragon",
    github: "https://github.com/Y0urPet/NC1_BolaDragon",
  },
  {
    id: 7,
    title: "Comuve",
    description:
      "A project to help reduce muscle stiffness by providing reminders for stretching exercises tailored to your schedule. Currently in the research phase and designed using Figma for prototyping.",
    image: "/images/projects/comuve.png",
    tag: ["All", "Research"],
    techStack: ["Figma", "Market Research", "Prototyping", "Project Management"],
    link: "https://www.figma.com/proto/BbCYOnF2BxMZmXnGoGhqQe/MC1---Team-7?type=design&node-id=708-3893&t=U0ilFc2CN51ByLP2-1&scaling=min-zoom&page-id=692%3A5635&starting-point-node-id=708%3A3887",
    github: "https://www.figma.com/proto/BbCYOnF2BxMZmXnGoGhqQe/MC1---Team-7?type=design&node-id=708-3893&t=U0ilFc2CN51ByLP2-1&scaling=min-zoom&page-id=692%3A5635&starting-point-node-id=708%3A3887",
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game built with Tinkercad and Logisim Evolution as part of the final project in the Introduction to Digital System course.",
    image: "/images/projects/tictactoe.png",
    tag: ["All", "Game"],
    techStack: ["Tinkercad", "Logisim Evolution", "C Programming"],
    link: "https://drive.google.com/file/d/19laV3CriBrCNWiFs5OLSo1uw8GwUuOL6/view",
    github: "https://drive.google.com/file/d/19laV3CriBrCNWiFs5OLSo1uw8GwUuOL6/view",
  },
  {
    id: 9,
    title: "TixOnline",
    description:
      "A platform for users to register, log in, and buy tickets for movies and events. The admin panel allows event organizers to manage content. Built with HTML, CSS, JavaScript, and connected to a SQL database.",
    image: "/images/projects/tixonline.png",
    tag: ["All", "Web"],
    techStack: ["HTML", "CSS", "JavaScript", "SQL", "Backend Development"],
    link: "https://github.com/SistemBasisData2023/TixOnline",
    github: "https://github.com/SistemBasisData2023/TixOnline",
  },
  {
    id: 10,
    title: "Self Ticketing Machine",
    description:
      "A VHDL-based system for automating ticket purchases. Users select their destination, and the system calculates the price and prints the ticket using a monitor.",
    image: "/images/projects/template.png",
    tag: ["All", "Embedded Systems"],
    techStack: ["VHDL", "Digital System Design"],
    link: "https://github.com/stefanagusto/ProyekAkhirPSDB4",
    github: "https://github.com/stefanagusto/ProyekAkhirPSDB4",
  },
  {
    id: 11,
    title: "JSleep",
    description:
      "An Android application that allows users to book hotel rooms, create accounts, manage bookings, and make payments. Built using Java and Android Studio.",
    image: "/images/projects/template.png",
    tag: ["All", "Mobile"],
    techStack: ["Java", "Android Studio", "Android"],
    link: "https://github.com/stefanagusto/JSleep",
    github: "https://github.com/stefanagusto/JSleep",
  },
  {
    id: 12,
    title: "Air Quality Monitor",
    description:
      "A smart air quality monitoring system built with Arduino and assembly language, designed to monitor air quality and provide alerts when pollution levels exceed predefined thresholds.",
    image: "/images/projects/template.png",
    tag: ["All", "Embedded Systems"],
    techStack: ["Arduino", "Assembly Language", "IoT"],
    link: "https://github.com/laurenchristyt/Air-Quality-Monitor",
    github: "https://github.com/laurenchristyt/Air-Quality-Monitor",
  },
];


const Projects = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="project" className="scroll-mt-[100px]">
      <div className="flex flex-col mb-12 mt-44 ">
        <h1 className="flex items-center justify-center text-white text-md sm:text-md lg:text-md ">
          Check out my
        </h1>
        <h1 className="flex items-center justify-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 hover:bg-slate-200 sm:text-5xl lg:text-5xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-6 text-white">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
        <ProjectTag
          name="Embedded Systems"
          onClick={handleTagChange}
          isSelected={tag == "Embedded Systems"}
        />
        <ProjectTag
          name="Research"
          onClick={handleTagChange}
          isSelected={tag == "Research"}
        />
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            techStack={project.techStack}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
