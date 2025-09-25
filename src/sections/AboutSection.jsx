"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Title entrance with perspective
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
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3D Text content with staggered animation
      gsap.fromTo(textRef.current?.children, 
        {
          rotateY: -45,
          opacity: 0,
          x: -100,
          z: -150,
          transformPerspective: 800,
        },
        {
          rotateY: 0,
          opacity: 1,
          x: 0,
          z: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3D Card floating animation
      gsap.fromTo(cardRef.current,
        {
          rotateX: 45,
          rotateY: 45,
          opacity: 0,
          scale: 0.8,
          z: -300,
        },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          z: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous floating animation for the main card
      gsap.to(cardRef.current, {
        y: "-10px",
        rotateX: "2deg",
        rotateY: "1deg",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Expertise items hover effect
      const expertiseItems = cardRef.current?.querySelectorAll('[data-expertise]');
      expertiseItems?.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.05,
            rotateY: 5,
            x: 10,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            rotateY: 0,
            x: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

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
              I'm a passionate <span className="font-medium text-blue-600 dark:text-blue-400">Web Developer</span> with
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
                  Creating immersive user interfaces with React, Next.js, and modern JavaScript frameworks.
                  Specializing in 3D animations and interactive experiences.
                </p>
              </div>
              <div 
                data-expertise
                className="border-l-4 border-green-500 pl-4 py-2 cursor-pointer transition-all duration-300 preserve-3d"
              >
                <h4 className="text-lg sm:text-xl font-medium mb-2 text-green-600 dark:text-green-400">3D Web Development</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Building cutting-edge 3D websites with GSAP, Three.js, and advanced CSS transforms.
                  Creating motion experiences that captivate users.
                </p>
              </div>
              <div 
                data-expertise
                className="border-l-4 border-purple-500 pl-4 py-2 cursor-pointer transition-all duration-300 preserve-3d"
              >
                <h4 className="text-lg sm:text-xl font-medium mb-2 text-purple-600 dark:text-purple-400">Performance Optimization</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensuring blazing-fast performance while maintaining stunning visual effects.
                  Optimized for all devices and screen sizes.
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