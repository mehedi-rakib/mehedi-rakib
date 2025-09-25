"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const backgroundRef = useRef(null);
  const buttonRef = useRef(null);
  const scene3dRef = useRef(null);
  const floatingElementsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Scene Setup
      gsap.set(scene3dRef.current, {
        perspective: 1000,
        transformStyle: "preserve-3d"
      });

      // Hero entrance animation with 3D transforms
      const tl = gsap.timeline();
      
      // 3D Text entrance
      tl.from(textRef.current?.children, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "bottom center",
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      })
      // 3D Image entrance
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.6,
        rotationY: -45,
        rotationX: 15,
        z: -200,
        duration: 1.8,
        ease: "back.out(1.7)",
      }, "-=0.8")
      // 3D Button entrance
      .from(buttonRef.current, {
        opacity: 0,
        y: 50,
        rotationX: -45,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.5");

      // Advanced 3D floating animations
      gsap.to(floatingElementsRef.current?.children, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotationX: "random(-15, 15)",
        rotationY: "random(-25, 25)",
        rotationZ: "random(-10, 10)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random"
        }
      });

      // 3D Parallax on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // 3D parallax for image
          gsap.set(imageRef.current, {
            y: progress * -100,
            rotationY: progress * 15,
            rotationX: progress * -5,
            z: progress * 50
          });

          // 3D parallax for text
          gsap.set(textRef.current, {
            y: progress * 50,
            rotationX: progress * -3,
            z: progress * 20
          });

          // 3D parallax for background elements
          gsap.set(floatingElementsRef.current?.children, {
            y: (i) => progress * (50 + i * 10),
            rotationY: (i) => progress * (10 + i * 5),
            z: (i) => progress * (20 + i * 10)
          });
        }
      });

      // Mouse movement 3D effect
      const handleMouseMove = (e) => {
        if (!scene3dRef.current) return;
        
        const rect = scene3dRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        gsap.to(imageRef.current, {
          rotationY: x * 15,
          rotationX: -y * 10,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(textRef.current, {
          rotationY: x * 5,
          rotationX: -y * 3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      // Add mouse move listener for desktop only
      if (window.innerWidth > 768) {
        scene3dRef.current?.addEventListener('mousemove', handleMouseMove);
      }

      return () => {
        scene3dRef.current?.removeEventListener('mousemove', handleMouseMove);
      };

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden perspective-2000"
    >
      {/* 3D Scene Container */}
      <div 
        ref={scene3dRef}
        className="absolute inset-0 preserve-3d"
      >
        {/* Advanced 3D Background Elements */}
        <div ref={floatingElementsRef} className="absolute inset-0 preserve-3d">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float-3d"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-lg blur-lg rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-md"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg transform rotate-12"></div>
          
          {/* 3D Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-12"></div>
            <div className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent transform -rotate-12"></div>
          </div>
          
          {/* Particle system simulation */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute top-64 left-3/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-48 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
        </div>

        {/* Content container with 3D transforms */}
        <div className="container mx-auto px-4 h-full relative z-20 pt-32 pb-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center h-full min-h-screen">
            
            {/* Left column - 3D Text content */}
            <div 
              ref={textRef} 
              className="max-w-2xl text-center lg:text-left order-2 lg:order-1 preserve-3d"
            >
              <motion.span 
                className="inline-block text-lg md:text-xl text-blue-300 mb-4 font-semibold tracking-wider uppercase"
              >
                Welcome to the Future
              </motion.span>
              
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                  I'm Mehedi Rakib
                </h1>
                <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Web Developer
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Creating immersive digital experiences that blur the line between 
                reality and imagination. Specialized in modern web technologies 
                with cutting-edge 3D animations.
              </p>
              
              <div 
                ref={buttonRef}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <motion.a 
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 preserve-3d"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </motion.a>
                
                <motion.a 
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: -3,
                    rotateY: 3
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 text-center glass-3d"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
            
            {/* Right column - 3D Image container */}
            <div className="relative flex justify-center lg:justify-end items-center w-full order-1 lg:order-2 mb-8 lg:mb-0">
              <div 
                ref={imageRef}
                className="relative preserve-3d hover-3d"
              >
                {/* Main image with 3D transform */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-[320px] sm:w-[400px] lg:w-[500px] mx-auto">
                  
                  {/* 3D Image frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                  
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 glass-3d shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 z-10"></div>
                    <Image
                      src="/mehedi.webp"
                      alt="Mehedi Rakib - 3D Web Developer"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 320px, 500px"
                    />
                  </div>
                  
                  {/* Floating 3D elements around image */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg animate-bounce blur-sm"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg animate-pulse transform rotate-45"></div>
                  <div className="absolute top-1/3 -left-8 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg animate-ping"></div>
                  
                  {/* Secondary overlapping image with advanced 3D */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotateY: [0, 5, -5, 0],
                      rotateX: [0, -3, 3, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-12 -right-12 w-36 h-36 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-blue-500/50 to-purple-500/50 shadow-2xl preserve-3d"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm"></div>
                    <Image
                      src="/me.jpg"
                      alt="Mehedi Rakib"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-125 hover:rotate-2"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </motion.div>
                  
                  {/* 3D Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl pointer-events-none animate-pulse"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection; 