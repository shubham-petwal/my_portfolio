import React, { useState } from "react";
import Layout from "../Layout";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Videos = () => {
  // Add your video data here
  const videos = [
    // AI and Machine Learning Projects
    {
      id: 1,
      title: "Custom RAG Implementation with LangChain",
      description: "An in-depth demonstration of a production-ready Retrieval Augmented Generation (RAG) system built with LangChain and GenAI. This scalable solution can be integrated into any enterprise application for enhanced document processing and knowledge retrieval.",
      url: "https://youtu.be/ueGuBZ1SKK8",
      thumbnail: "https://img.youtube.com/vi/ueGuBZ1SKK8/0.jpg",
      tags: ["GenAI", "LangChain", "Python", "React", "FastAPI"]
    },
    {
      id: 2,
      title: "InvestHub - AI-Powered Startup-Investor Matching Platform",
      description: "A sophisticated platform leveraging AI to create meaningful connections between startups and investors. Features intelligent matching algorithms and detailed analytics for optimal pairing.",
      url: "https://youtu.be/mR3Iex9tIXQ",
      thumbnail: "https://img.youtube.com/vi/mR3Iex9tIXQ/0.jpg",
      tags: ["GenAI", "Python", "React", "FastAPI", "OpenAI"]
    },
    {
      id: 3,
      title: "Firebase GenKit SDK Integration Guide",
      description: "Comprehensive tutorial on implementing Firebase GenKit SDK for building advanced chatbots and intelligent agents. Learn best practices for deployment and optimization.",
      url: "https://youtu.be/a4aQ4X76s0M",
      thumbnail: "https://img.youtube.com/vi/a4aQ4X76s0M/0.jpg",
      tags: ["Firebase", "GenKit", "React", "OpenAI"]
    },

    // Computer Vision and AR Projects
    {
      id: 4,
      title: "Advanced Augmented Reality Implementation",
      description: "Showcase of cutting-edge AR technology, demonstrating real-time dragon rendering in physical space using Python and Unity Engine. Perfect for immersive gaming and educational applications.",
      url: "https://youtube.com/shorts/qUPiDUYu8EI?feature=share",
      thumbnail: "https://img.youtube.com/vi/qUPiDUYu8EI/0.jpg",
      tags: ["Unity Engine", "MAC", "IOS", "Python", "AR"]
    },
    {
      id: 5,
      title: "Interactive Virtual Painter with Hand Tracking",
      description: "An innovative application combining OpenCV and MediaPipe for precise hand tracking, enabling intuitive virtual painting. Features real-time gesture recognition and smooth drawing capabilities.",
      url: "https://youtu.be/_VD0wQqk8a0",
      thumbnail: "https://img.youtube.com/vi/_VD0wQqk8a0/0.jpg",
      tags: ["MAC", "Python", "OpenCV", "MediaPipe", "Hand Tracking"]
    },
    {
      id: 6,
      title: "Real-World Object AR Video Mapping",
      description: "Advanced augmented reality demonstration showing seamless integration of animated content (sea bird animation) with real-world objects using Python and Unity Engine.",
      url: "https://youtu.be/JxROjhIWziw",
      thumbnail: "https://img.youtube.com/vi/JxROjhIWziw/0.jpg",
      tags: ["Unity Engine", "MAC", "IOS", "Python", "AR"]
    },

    // Development Tools and Utilities
    {
      id: 7,
      title: "Ollama GPU Acceleration Guide for M1 Mac",
      description: "Step-by-step tutorial on optimizing Ollama performance with GPU acceleration on M1 Macs. Learn to run large language models locally with maximum efficiency.",
      url: "https://youtu.be/0OYPCNAoXso",
      thumbnail: "https://img.youtube.com/vi/0OYPCNAoXso/0.jpg",
      tags: ["Ollama", "MAC M1", "Python", "LLM"]
    },
    {
      id: 8,
      title: "Advanced Lead Generation System",
      description: "Comprehensive guide on building an automated lead generation system utilizing LinkedIn and Google Resources. Includes implementation of AI-powered data extraction and analysis.",
      url: "https://youtu.be/WxQ2eQslCjE",
      thumbnail: "https://img.youtube.com/vi/WxQ2eQslCjE/0.jpg",
      tags: ["Next.js", "Python", "FastAPI", "OpenAI"]
    },
    {
      id: 9,
      title: "Computer Vision-Based Drag and Drop Interface",
      description: "Implementation of an intuitive virtual drag and drop system using Python and OpenCV. Features real-time object detection and smooth interaction handling.",
      url: "https://youtu.be/Y06XP8p4-lg",
      thumbnail: "https://img.youtube.com/vi/Y06XP8p4-lg/0.jpg",
      tags: ["OpenCV", "Python", "Computer Vision", "UI/UX"]
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-montserrat mb-4">
            Project Demos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch demonstrations of my projects and see them in action. Each video showcases 
            the features and functionality of different applications I've built.
          </p>
        </div>

        {/* Featured Video Player */}
        {selectedVideo && (
          <div className="mb-16">
            <div className="relative pt-[56.25%] bg-zinc-900 rounded-2xl overflow-hidden">
              <ReactPlayer
                url={selectedVideo.url}
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                controls
                playing
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload'
                    }
                  }
                }}
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{selectedVideo.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {selectedVideo.description}
              </p>
              <div className="flex gap-2 mt-3">
                {selectedVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyan-100 dark:bg-red-900/20 
                             text-cyan-600 dark:text-red-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-zinc-800/50 rounded-xl overflow-hidden 
                       shadow-lg hover:shadow-xl transition-all duration-300
                       border border-zinc-200 dark:border-zinc-700"
            >
              <div className="relative pt-[56.25%] bg-zinc-900">
                <ReactPlayer
                  url={video.url}
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  light={video.thumbnail}
                  playIcon={
                    <div className="bg-cyan-500 dark:bg-red-500 rounded-full p-4 
                                  transform transition-transform hover:scale-110">
                      <svg 
                        className="w-8 h-8 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                  }
                  onClickPreview={() => setSelectedVideo(video)}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {video.description}
                </p>
                <div className="flex gap-2 mt-3">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-cyan-100 dark:bg-red-900/20 
                               text-cyan-600 dark:text-red-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos; 