import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion"; // Install framer-motion for animations
import { Link } from "react-router-dom";
import shubham from "../../assets/profilePic2.png";
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
                and end-to-end AI-driven solutions using the MERN stack, GenAI, machine learning, and natural language processing technologies.
              </motion.p>

              {/* Social Media Icons */}
              <motion.div 
                className="flex gap-4 pt-4"
                variants={textReveal}
                initial="initial"
                animate="animate"
                custom={2}
              >
                <motion.a
                  href="https://x.com/Shubham9951200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-500 transition group-hover:fill-cyan-500 dark:fill-zinc-400 dark:group-hover:fill-red-500"
                  >
                    <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://github.com/shubham-petwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-500 transition group-hover:fill-cyan-500 dark:fill-zinc-400 dark:group-hover:fill-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                    ></path>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/shubham-petwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-500 transition group-hover:fill-cyan-500 dark:fill-zinc-400 dark:group-hover:fill-red-500"
                  >
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                  </svg>
                </motion.a>
              </motion.div>
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

            {/* Project Demos Preview Section */}
            <motion.div 
              className="space-y-6"
              variants={textReveal}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-zinc-800/50 dark:to-zinc-900/50 
                            rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                bg-white/80 dark:bg-zinc-800/80 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-red-500 animate-pulse"></span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Featured Projects
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold font-montserrat text-gray-900 dark:text-white">
                      Watch My Projects in Action
                    </h2>
                    
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      From RAG implementations to AR experiences, see how I bring ideas to life.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {['AI/ML', 'AR/VR', 'Full-Stack', 'Computer Vision'].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-white/60 dark:bg-zinc-800/60 
                                               rounded-full text-gray-700 dark:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/videos"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 
                             bg-cyan-500 dark:bg-red-500 text-white font-semibold rounded-lg
                             hover:bg-cyan-600 dark:hover:bg-red-600 transform hover:scale-105
                             transition-all duration-300 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Demos
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons with hover animation */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={textReveal}
              initial="initial"
              animate="animate"
              custom={4}
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
                  href="https://shubham-fullstack-ai-developer.netlify.app/shubham_3Y2025.pdf"
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
