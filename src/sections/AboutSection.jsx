"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">Get to know me!</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-medium">Web Developer</span> with
              expertise in creating engaging and functional websites. With a
              strong foundation in modern web technologies, I specialize in
              building responsive and dynamic web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development began several years ago, and since
              then, I've worked on numerous projects that have honed my skills in
              frontend and backend development. I'm always eager to learn and
              adapt to new technologies to create better digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium inline-block"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg mt-6 md:mt-0"
          >
            <h3 className="mb-6 text-xl sm:text-2xl font-semibold">My Expertise</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-lg sm:text-xl font-medium mb-2">Frontend Development</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Crafting responsive and interactive user interfaces using modern 
                  frameworks like React and Next.js.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="text-lg sm:text-xl font-medium mb-2">Web Perfomance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                Optimized for fast loading and seamless user experience, ensuring your skills shine effortlessly across all devices.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="text-lg sm:text-xl font-medium mb-2">Backend Development</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Building robust server-side applications and APIs that power 
                  the frontend experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 