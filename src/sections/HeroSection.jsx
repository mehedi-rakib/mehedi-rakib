"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen  bg-[#141A31] text-white relative overflow-hidden">
      {/* Diagonal pattern overlay */}
      <div className=" md:absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'repeating-linear-gradient(120deg, #111111, #111111 2px, transparent 2px, transparent 12px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 h-full z-10 relative pt-32 pb-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-12 items-center h-full">
          {/* Left column - Text content */}
          <div className="z-10 max-w-xl text-center md:text-left order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-lg md:text-xl text-gray-300 mb-4"
            >
              HELLO
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                I'm Mehedi Rakib a
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-500">
                Web Developer<span className="text-white">.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 mb-8 mx-auto md:mx-0 max-w-lg"
            >
              I build exceptional and accessible digital experiences for the web.
              Specializing in creating modern, responsive websites and web applications.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium shadow-lg hover:shadow-blue-500/30"
              >
                View Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Image container with enhanced animations */}
          <div className="relative flex justify-center md:justify-end items-center w-full order-1 md:order-2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative h-[350px] sm:h-[full] md:h-[500px] lg:h-[600px] w-[280px] sm:w-[400px] md:w-[450px] lg:w-[600px] mx-auto md:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded md:rounded-lg blur-xl"></div>
                <div className="relative w-full h-full rounded-xl md:rounded-lg overflow-hidden">
                  <Image
                    src="/mehedi.webp"
                    alt="Mehedi Rakib"
                    fill
                    priority
                    className="object-cover md:object-contain relative z-0 hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 300px, 500px"
                  />
                </div>
                
                {/* Second overlapping image */}
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -2, 2, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg z-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm"></div>
                  <Image
                    src="/me.jpg"
                    alt="Mehedi Rakib"
                    fill
                    className="object-cover relative z-50 hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 