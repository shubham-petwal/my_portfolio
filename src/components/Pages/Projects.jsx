import React from "react";
import insta from "../../assets/instagram.png"
import pizza from "../../assets/pizza.png"
import chatbot from "../../assets/SaasChatbot.png"
import youtube from "../../assets/YoutubeChat.png"
import weather from "../../assets/weather.png"
import meet from "../../assets/GoogleMeet.png"
import travel from "../../assets/travel.png"
import Layout from "../Layout";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      projectImg: chatbot,
      title: "GenAI Chatbot for SaaS Website",
      description: `A chatbot leveraging the Genkit SDK to provide an intelligent conversational experience for SaaS platform documentation. This project integrates Firebase, Google AI, and Genkit, enabling seamless user interaction with platform knowledge.`,
      link: "https://github.com/shubham-petwal/GenAiChatbot",
      gitLink: "https://github.com/shubham-petwal/GenAiChatbot",
    },
    {
      projectImg: youtube,
      title: "YouTube Video Chatbot",
      description: `A Streamlit-based chatbot that enables interaction with YouTube video content. It processes video transcripts, generates embeddings, and provides intelligent responses to user queries. Powered by LangChain, Google Generative AI (Gemini), and Streamlit for a smooth conversational experience.`,
      link: "https://github.com/shubham-petwal/YoutubeChatbot",
      gitLink: "https://github.com/shubham-petwal/YoutubeChatbot",
    },
    {
      projectImg: meet,
      title: "Django Google Meet Bot",
      description: `A Django-based Google Meet Bot that automates meeting interactions with AI-powered capabilities. Features include auto-joining meetings, sending messages, recording audio, transcribing meetings, and generating summaries and highlights. It leverages Selenium, PyAudio, Celery, and other tools for efficient performance.`,
      link: "https://github.com/shubham-petwal/Django-Google-meet-bot",
      gitLink: "https://github.com/shubham-petwal/Django-Google-meet-bot",
    },
    {
      projectImg: insta,
      title: "Instagram Clone",
      description: `A feature-rich Instagram clone built using Next.js during an internship. This application includes features such as uploading, liking, commenting, sharing photos, sending friend requests, viewing profiles, user search, notifications, and more.`,
      link: "https://github.com/shubham-petwal/instagram-clone",
      gitLink: "https://github.com/shubham-petwal/instagram-clone",
    },
    {
      projectImg: pizza,
      title: "Django Pizza Ordering Website",
      description: `A Python and Django-based pizza ordering platform that allows users to seamlessly browse through the menu, customize orders, and place them online. This project includes features like user authentication, order tracking, and a responsive UI for an enhanced user experience.`,
      link: "https://github.com/shubham-petwal/Django-Pizza_Ordering_Website-",
      gitLink: "https://github.com/shubham-petwal/Django-Pizza_Ordering_Website-",
    },
    {
      projectImg: weather,
      title: "Weather App Vue3",
      description: `A weather forecasting and latest news app built using Vue.js and Tailwind. It leverages the Weather API and News API to provide accurate weather details like temperature in Celsius and Fahrenheit, wind speed, and news updates. Users can input a location name to get real-time weather data for that place.`,
      link: "https://github.com/shubham-petwal/WeatherForcast_Application",
      gitLink: "https://github.com/shubham-petwal/WeatherForcast_Application",
    },
    {
      projectImg: travel,
      title: "Travel Planner App",
      description: `A travel planning app powered by OpenAI, enabling users to plan their trips effortlessly. Users can input their destination and trip duration to receive a 5-day itinerary, including top attractions, authentic cuisines, best hotels, and transportation options.`,
      link: "https://github.com/shubham-petwal/Travel-Planner-OpenAI",
      gitLink: "https://github.com/shubham-petwal/Travel-Planner-OpenAI",
    },


  ];
  

  return (
    <Layout>
      <div className="p-5">
        <div className="flex flex-wrap -mx-3">
          {projectData.map((content, index) => (
            <a
              key={index}
              href={content.link}
              target="_blank"
              className="w-full md:w-1/2 lg:w-1/3 px-3 mb-4"
              style={{ minHeight: "280px" }}
            >
              <div className="  border-solid border-2  p-2 border-[#a0a0a0] dark:border-[#3e3e3e] rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-900 transition-transform transform hover:scale-95 duration-300 cursor-pointer h-full flex flex-col gap-3">
                <img src={content.projectImg} />
                <div className=" flex flex-col justify-between flex-1">
                  <div>
                    <p className="font-montserrat text-lg font-bold dark:text-white text-black">
                      {content.title}
                    </p>
                    <p className="text-gray-500 font-montserrat md:text-sm text-xs">
                      {content.description}
                    </p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="flex justify-center items-center gap-2 dark:hover:bg-zinc-950 hover:bg-slate-200 p-3 rounded-lg  border-solid border-[2px] hover:border-red-600  border-gray-500">
                      <a
                        className="text-center text-gray-500 font-montserrat text-lg "
                        href={content.gitLink}
                        target="_blank"
                      >
                        Read more
                      </a>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
