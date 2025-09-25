"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!card || !image || !content) return;

    // Enhanced 3D hover effects
    const handleMouseEnter = () => {
      if (window.innerWidth > 768) {
        gsap.to(card, {
          y: -20,
          scale: 1.05,
          rotateX: 8,
          rotateY: 5,
          z: 100,
          boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)",
          duration: 0.6,
          ease: "power2.out",
        });
        
        gsap.to(image, {
          scale: 1.2,
          rotation: 3,
          z: 50,
          duration: 0.8,
          ease: "power2.out",
        });

        gsap.to(content.querySelectorAll('.project-tag'), {
          scale: 1.1,
          rotateY: 5,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth > 768) {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          z: 0,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          duration: 0.6,
          ease: "power2.out",
        });
        
        gsap.to(image, {
          scale: 1,
          rotation: 0,
          z: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        gsap.to(content.querySelectorAll('.project-tag'), {
          scale: 1,
          rotateY: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
        });
      }
    };

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousemove', handleMouseMove);

    // Enhanced initial 3D entrance animation
    gsap.fromTo(card, 
      {
        y: 100,
        rotateX: 90,
        opacity: 0,
        scale: 0.8,
        z: -200,
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        scale: 1,
        z: 0,
        duration: 1.2,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous floating animation
    gsap.to(card, {
      y: "-10px",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.3
    });

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full preserve-3d glass-3d transform transition-all duration-300"
    >
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-20" />
        <div 
          ref={imageRef}
          className="h-full w-full flex items-center justify-center relative overflow-hidden preserve-3d"
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-all duration-700 hover:brightness-110"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-600 dark:to-gray-700">
                  <div class="text-center p-6">
                    <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">${project.title}</p>
                  </div>
                </div>
              `;
            }}
          />
        </div>
        
        {/* Enhanced project category badge */}
        <div className="absolute top-4 left-4 z-30">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-2xl backdrop-blur-md shadow-lg border border-white/20">
            {project.category === 'web' ? '🌐 Web App' : '🎨 UI Design'}
          </span>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce"></div>
      </div>
      
      <div 
        ref={contentRef}
        className="p-6 sm:p-8 flex-grow flex flex-col preserve-3d"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-4 line-clamp-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow text-sm sm:text-base leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="project-tag px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-2 border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all duration-300 preserve-3d"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="project-tag px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 shadow-sm">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-300 text-center flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced 3D Title animation
      gsap.fromTo(titleRef.current,
        {
          rotateX: -90,
          opacity: 0,
          y: 100,
          z: -200,
          transformPerspective: 1000,
        },
        {
          rotateX: 0,
          opacity: 1,
          y: 0,
          z: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced filter buttons 3D animation
      const buttons = sectionRef.current?.querySelectorAll('.filter-button');
      buttons?.forEach((button, index) => {
        gsap.fromTo(button,
          {
            rotateY: 45,
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            rotateY: 0,
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: button,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Background floating elements
      gsap.to('.floating-bg-element', {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        scale: "random(0.8, 1.2)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden perspective-2000"
    >
      {/* Enhanced 3D background decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="floating-bg-element absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="floating-bg-element absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
        <div className="floating-bg-element absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl"></div>
        <div className="floating-bg-element absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-lg"></div>
        <div className="floating-bg-element absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={titleRef}
          className="mb-16 text-center preserve-3d"
        >
          <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-10 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12 leading-relaxed text-lg sm:text-xl">
            Discover my latest creations—each project showcases cutting-edge technologies, 
            innovative design, and seamless user experiences that push the boundaries of modern web development.
          </p>

          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("all")}
              className={`filter-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              All Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("web")}
              className={`filter-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "web"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Web Apps
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("ui")}
              className={`filter-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "ui"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              UI Projects
            </motion.button>
          </div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 perspective-1000"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Show message when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400">No projects found for this category.</p>
          </motion.div>
        )}

        {/* Call to action */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Want to see more projects?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                I'm always working on new projects and exploring cutting-edge technologies. 
                Let's discuss how we can collaborate on your next big idea.
              </p>
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium shadow-lg text-base sm:text-lg"
              >
                Get In Touch
                <motion.svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 