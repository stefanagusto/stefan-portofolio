import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaTrello,
  FaJira,
} from "react-icons/fa";  // Import only the relevant icons
import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiSwift,
  SiArduino,
} from "react-icons/si";  // Adjusted imports for your skills

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-2xl text-yellow-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-2xl text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-2xl text-teal-500" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-2xl text-blue-300" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-2xl text-gray-100" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" /> },
    { name: "Java", icon: <FaJava className="text-2xl text-cyan-500" /> },
    { name: "Swift", icon: <SiSwift className="text-2xl text-orange-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-2xl text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-2xl text-white" /> },
    { name: "Jira", icon: <FaJira className="text-2xl text-blue-500" /> },
    { name: "Trello", icon: <FaTrello className="text-2xl text-blue-500" /> },
    { name: "Arduino", icon: <SiArduino className="text-2xl text-blue-300" /> },
  ];

  return (
    <div id="skill" className="mt-40 mb-20 scroll-mt-[170px]">
      <div className="flex flex-col mb-12">
        <h1 className="flex items-center justify-center text-white text-md sm:text-md lg:text-md ">
          Explore my
        </h1>
        <h1 className="flex items-center justify-center text-2xl font-bold text-transparent sm:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 hover:bg-slate-200">
          Techstack
        </h1>
      </div>

      <div className="grid items-center justify-center max-w-4xl grid-cols-2 gap-4 mx-auto sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center px-4 py-4 text-center text-white transition-all duration-500 ease-in-out rounded-md shadow bg-gradient-to-r from-primary-500 to-secondary-500 hover:text-black group"
          >
            {/* Absolute div for solid background transition */}
            <div className="absolute inset-0 z-0 transition-all duration-300 ease-in-out bg-black border border-white group-hover:bg-transparent"></div>

            {/* Skill icon and text content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              {skill.icon}
              <span className="mt-2 text-sm font-semibold ">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
