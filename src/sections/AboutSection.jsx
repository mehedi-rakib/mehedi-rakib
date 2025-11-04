"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import ThreeBackground from "@/components/ThreeBackground";
// GSAP removed for cleaner UX

// Register GSAP plugins
// GSAP plugin registration removed

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  // GSAP-based animations removed for simplicity

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <ThreeBackground />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={titleRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          // variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            ref={textRef}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">Get to know me!</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a <span className="font-medium text-blue-600 dark:text-blue-400">MERN-stack Developer</span> building modern web apps with MongoDB, Express.js, React, and Node.js.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I design clean APIs, scalable backends, and polished frontends with strong attention to performance, accessibility, and maintainability.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside coding, I explore new tech, contribute to open source, and share knowledge with the dev community.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 font-medium inline-block shadow-lg"
              >
                Contact Me
              </motion.a>
            </div>
          </div>

          <div 
            ref={cardRef}
            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 preserve-3d glass-3d hover-3d"
          >
            <h3 className="mb-6 text-xl sm:text-2xl font-semibold text-center text-blue-600 dark:text-blue-400">My Expertise</h3>
            <div className="space-y-6">
              <div 
                data-expertise 
                className="border-l-4 border-blue-500 pl-4 py-2 cursor-pointer transition-all duration-300 preserve-3d"
              >
                <h4 className="text-lg sm:text-xl font-medium mb-2 text-blue-600 dark:text-blue-400">Frontend Development</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Building responsive interfaces with React and Next.js, Tailwind CSS, and modern JavaScript.
                </p>
              </div>
              <div 
                data-expertise
                className="border-l-4 border-green-500 pl-4 py-2 cursor-pointer transition-all duration-300 preserve-3d"
              >
                <h4 className="text-lg sm:text-xl font-medium mb-2 text-green-600 dark:text-green-400">MERN Stack</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack apps with MongoDB, Express.js, React, and Node.js; authentication, REST APIs, and integrations.
                </p>
              </div>
              <div 
                data-expertise
                className="border-l-4 border-purple-500 pl-4 py-2 cursor-pointer transition-all duration-300 preserve-3d"
              >
                <h4 className="text-lg sm:text-xl font-medium mb-2 text-purple-600 dark:text-purple-400">Performance & Deployment</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Performance tuning, testing, and deployments to platforms like Vercel. Optimized for all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;