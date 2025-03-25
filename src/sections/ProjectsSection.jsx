"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Receipt Generator",
    description:
      "I contributed to the frontend of receipt-generator.io, helping to build and refine the user interface for their receipt generation tool.",
    image: "https://receiptgenerator.io/images/receipt_generator_cover_image.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://receiptgenerator.io",
    githubUrl: "/",
    category: "web",
  },
  {
    id: 2,
    title: "Education Management System",
    description:
      "The platform includes a fully developed Education Management System to manage students, courses, and educational resources.",
    image: "/japan.png",
    tags: ["Next.js", "Laravel", "MySQL", "Tailwind", "linux"],
    liveUrl: "https://japanambition.com",
    githubUrl: "",
    category: "web",
  },
  {
    id: 3,
    title: "Daily Needs BD",
    description:
      "As a full-stack developer, I built the entire Daily Needs BD e-commerce website, from the user interface to the backend functionality.",
    image: "/daily.png",
    tags: ["Laravel 12", "API Integration", "Payment getway", "CSS Modules"],
    liveUrl: "https://dailyneedsbd.com",
    githubUrl: "https://github.com/mehedirakib/weather",
    category: "ui",
  },
  
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 z-10" />
        <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            fill
            className="object-fit w-full h-full"
          />
        </div>
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors flex-grow sm:flex-grow-0 text-center"
          >
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition-colors flex-grow sm:flex-grow-0 text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            Here are some of my recent projects. Each project showcases different
            skills and technologies I've worked with.
          </p>

          <div className="flex justify-center gap-3 flex-wrap mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "web"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setFilter("ui")}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "ui"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              UI Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 