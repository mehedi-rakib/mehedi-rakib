"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Initial 3D entrance animation
    gsap.fromTo(card, 
      {
        rotateX: -90,
        opacity: 0,
        y: 50,
        z: -100,
        transformPerspective: 1000,
      },
      {
        rotateX: 0,
        opacity: 1,
        y: 0,
        z: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -15,
        scale: 1.1,
        rotateY: 10,
        rotateX: 5,
        z: 50,
        duration: 0.4,
        ease: "power2.out",
      });
      
      gsap.to(card.querySelector('.skill-icon'), {
        rotation: 360,
        scale: 1.3,
        rotateY: 180,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Add glowing effect
      gsap.to(card, {
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        z: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      
      gsap.to(card.querySelector('.skill-icon'), {
        rotation: 0,
        scale: 1,
        rotateY: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(card, {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={item}
      className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer preserve-3d glass-3d hover-3d"
    >
      <div className="skill-icon w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center preserve-3d">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-600">
          <Icon className={`text-2xl sm:text-3xl ${color} transition-all duration-300`} />
        </div>
      </div>
      <h4 className="text-sm sm:text-base font-medium text-center text-gray-800 dark:text-gray-200">{name}</h4>
    </motion.div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Title entrance animation
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

      // 3D Skill categories animation with perspective
      const categories = sectionRef.current?.querySelectorAll('.skill-category');
      categories?.forEach((category, index) => {
        gsap.fromTo(category,
          {
            rotateY: index % 2 === 0 ? -60 : 60,
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            z: -150,
            transformPerspective: 800,
          },
          {
            rotateY: 0,
            opacity: 1,
            x: 0,
            z: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: category,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Add continuous floating effect
        gsap.to(category, {
          y: "-8px",
          rotateX: "1deg",
          rotateY: index % 2 === 0 ? "2deg" : "-2deg",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      });

      // Enhanced floating animation for background elements
      gsap.to('.floating-element', {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        rotateY: "random(-10, 10)",
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

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-padding bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-40 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={titleRef}
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

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={category.name} className="skill-category preserve-3d">
              <motion.h3
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-10 text-center text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                {category.name}
              </motion.h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 perspective-1000"
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