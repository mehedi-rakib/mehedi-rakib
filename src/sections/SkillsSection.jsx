"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaBitbucket
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb,  
  SiVercel, 
  SiGraphql
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

const VscodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="#007ACC"
  >
    <path d="M19.697 2.303a1 1 0 0 0-1.414 0L15.41 5.586l-2.236-2.236a1 1 0 0 0-1.415 1.415l2.237 2.236L8.01 11.95a1 1 0 0 0 0 1.414l3.888 3.888a1 1 0 0 0 1.414 0l7.19-7.19a1 1 0 0 0 0-1.414L19.697 2.303z" />
  </svg>
);
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-200" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "REST API", icon: TbApi, color: "text-blue-500" },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-gray-200" },
      { name: "Bitbucket", icon: FaBitbucket, color: "text-blue-600" },
      { name: "VS Code", icon: VscodeIcon, color: "text-blue-500" },
      { name: "Figma", icon: FaFigma, color: "text-purple-500" },
      { name: "Responsive Design", icon: MdDevices, color: "text-teal-500" },
      { name: "Vercel", icon: SiVercel, color: "text-gray-800 dark:text-gray-200" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillCard = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      variants={item}
      className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <Icon className={`text-xl sm:text-3xl ${color}`} />
        </div>
      </div>
      <h4 className="text-sm sm:text-base font-medium text-center">{name}</h4>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with to bring digital
            experiences to life. I'm constantly learning and expanding my
            skill set to stay up-to-date with the latest trends.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={category.name} className="mb-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 text-center md:text-left text-xl sm:text-2xl font-semibold"
              >
                {category.name}
              </motion.h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
              >
                {category.skills.map((skill) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon} 
                    color={skill.color}
                  />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 