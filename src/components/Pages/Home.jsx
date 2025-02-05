import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion"; // Install framer-motion for animations
import { Link } from "react-router-dom";
import shubham from "../../assets/shubham_profile.jpeg";
import geekyants from "../../assets/geekyants.png";
// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";

const Home = () => {
  // Animation variants for the profile image
  const imageAnimations = {
    initial: { scale: 0.8, opacity: 0, y: 50 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
    hover: {
      y: [-10, 0, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Gradient background animation
  const gradientAnimation = {
    animate: {
      background: [
        "linear-gradient(45deg, #00b4d8, #90e0ef)",
        "linear-gradient(90deg, #00b4d8, #90e0ef)",
        "linear-gradient(135deg, #00b4d8, #90e0ef)",
        "linear-gradient(180deg, #00b4d8, #90e0ef)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Text reveal animation
  const textReveal = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Layout>
      <div className="dark:text-white text-black">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-6xl font-montserrat font-bold"
                variants={textReveal}
                initial="initial"
                animate="animate"
                custom={0}
              >
                Full-Stack AI Developer
              </motion.h1>
              <motion.p 
                className="text-lg dark:text-zinc-400 text-zinc-600 font-montserrat leading-relaxed"
                variants={textReveal}
                initial="initial"
                animate="animate"
                custom={1}
              >
                I'm Shubham, a full-stack developer based in Bengaluru. I specialize in building scalable web applications 
                and end-to-end AI-driven solutions using the MERN stack, machine learning, and natural language processing technologies.
              </motion.p>
            </motion.div>

            {/* Tech Stack with staggered animation */}
            <motion.div 
              className="space-y-4"
              variants={textReveal}
              initial="initial"
              animate="animate"
              custom={2}
            >
              <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Next.js','Vue.js','Flask','Nuxt.js', 'MongoDB','PostgreSQL', 'Python','FastAPI','Django','Docker','AWS', 'Git', 'LLMs', 'AI/ML','Chatbots'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl 
                             text-zinc-800 dark:text-zinc-200 text-sm font-medium
                             border border-zinc-200 dark:border-zinc-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons with hover animation */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={textReveal}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact-me"
                  className="px-6 py-3 bg-cyan-500 dark:bg-red-500 text-white 
                           rounded-xl font-semibold hover:bg-cyan-600 dark:hover:bg-red-600 
                           transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="./src/assets/shubham_3Y2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-cyan-500 dark:border-red-500 
                           text-cyan-500 dark:text-red-500 rounded-xl font-semibold 
                           hover:bg-cyan-50 dark:hover:bg-red-900/10 transition-all duration-300"
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image with floating animation */}
          <motion.div
            className="relative flex justify-center"
            variants={imageAnimations}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.div 
              className="absolute inset-0 rounded-full blur-3xl opacity-50"
              variants={gradientAnimation}
              animate="animate"
            />
            <motion.div className="relative">
              <motion.img
                src={shubham}
                alt="Shubham Petwal"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
                         border-4 border-white dark:border-zinc-800 shadow-2xl"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-24 mb-12"
        >
          <h2 className="text-2xl font-bold font-montserrat mb-8">
            Work Experience
          </h2>
          <div className="grid gap-6">
            <div className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl 
                          border border-zinc-200 dark:border-zinc-700
                          hover:border-cyan-500 dark:hover:border-red-500 
                          transition-all duration-300">
              <div className="flex gap-6">
                <img
                  src={geekyants}
                  alt="GeekyAnts"
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">GeekyAnts</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Software Development Engineer II</p>
                  <p className="text-sm text-zinc-500">May 2022 - Present</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                    Working on scalable web applications and AI solutions using MERN stack and modern AI technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-24 mb-12"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-montserrat">
              Featured Projects
            </h2>
            <Link
              to="/projects"
              className="text-cyan-500 dark:text-red-500 hover:underline"
            >
              View All →
            </Link>
          </div>
          {/* Add your featured projects grid here */}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
