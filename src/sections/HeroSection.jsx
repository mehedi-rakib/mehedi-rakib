"use client";

import { motion } from "framer-motion";
import ThreePortrait from "@/components/ThreePortrait";

const HeroSection = () => {
  // Simplified hero without GSAP; 3D handled by React Three Fiber

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left">
              <motion.span 
                className="inline-block text-lg md:text-xl text-blue-300 mb-4 font-semibold tracking-wider uppercase"
              >
                Welcome
              </motion.span>
              
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                  I'm Mehedi Rakib
                </h1>
                <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MERN-Stack Developer
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I design and build full-stack apps with MongoDB, Express, React, and Node.
                Clean APIs, scalable services, and smooth UIs — enhanced with subtle 3D.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <motion.a 
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold shadow-2xl transition-all duration-200"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Portfolio
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </span>
                </motion.a>
                
                <motion.a 
                  whileHover={{ 
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-semibold border border-white/20 transition-all duration-200 text-center"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px]">
              <ThreePortrait />
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;