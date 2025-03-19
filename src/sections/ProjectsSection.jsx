"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.vercel.app",
    githubUrl: "https://github.com/mehedirakib/ecommerce",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application that allows users to create, organize, and track their tasks with features like drag-and-drop, filters, and notifications.",
    image: "/projects/task-app.jpg",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example-taskapp.vercel.app",
    githubUrl: "https://github.com/mehedirakib/taskapp",
    category: "web",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time weather information, forecasts, and animated visualizations for locations worldwide.",
    image: "/projects/weather-app.jpg",
    tags: ["React", "API Integration", "Chart.js", "CSS Modules"],
    liveUrl: "https://example-weather.vercel.app",
    githubUrl: "https://github.com/mehedirakib/weather",
    category: "ui",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A professional portfolio website showcasing skills, projects, and contact information with a modern and responsive design.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    liveUrl: "https://mehedirakib.com",
    githubUrl: "https://github.com/mehedirakib/portfolio",
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
          <p className="text-gray-500 dark:text-gray-400 text-sm">Project Image</p>
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
            Live Demo
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