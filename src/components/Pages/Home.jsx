import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import geekyants from "../../assets/geekyants.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const articles = [
    {
      date: "August 27, 2023",
      title: "A Beginner's Guide to Building Scalable Web Applications with the MERN Stack",
      content:
        "With over 2 years of experience in full-stack development, I specialize in building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). This article provides a detailed guide on how to use the MERN stack to create robust, dynamic applications, focusing on performance optimization and scalability.",
      link: "/working-in-progress",
    },
    {
      date: "March 2, 2024",
      title: "Getting Started with AI-Powered Web Development: A Dive into NLP and Machine Learning",
      content:
        "Leveraging technologies like OpenAI, Langchain, and LLMs, I’ve worked on AI-driven web applications that improve user interactions. This article explores how you can integrate Natural Language Processing (NLP) and Machine Learning into web applications to deliver intelligent, personalized experiences, from chatbots to real-time data processing.",
      link: "/working-in-progress",
    },
    {
      date: "May 10, 2024",
      title: "End-to-End AI Projects: Leveraging Full-Stack Development and Machine Learning",
      content:
        "As a Software Development Engineer working with advanced AI technologies, I’ve built end-to-end AI solutions using tools like TensorFlow, OpenCV, and LangChain, integrated seamlessly with full-stack development. This article covers how to create AI-powered systems from scratch, ensuring smooth deployment with cloud services like AWS and Firebase.",
      link: "/working-in-progress",
    },
    {
      date: "June 17, 2024",
      title: "Optimizing E-commerce Performance with Nuxt.js and Tailwind CSS",
      content:
        "Drawing from my experience working on optimizing an e-commerce platform, this article dives into how to enhance performance and responsiveness using Nuxt.js and Tailwind CSS. By optimizing site load times and reducing bounce rates, you can improve user experience and conversion rates.",
      link: "/working-in-progress",
    },
    {
      date: "September 24, 2024",
      title: "Mastering Document and Data Extraction for AI Projects",
      content:
        "Document extraction and data management are critical for AI-powered systems. With my experience working on AI projects involving advanced document extraction and processing, this article covers techniques for extracting, managing, and storing data efficiently with tools like OpenCV, OCR, and vector databases.",
      link: "/working-in-progress",
    },
  ];
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setError(true);
      return;
    }
    const joinApi = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://protfolio-contact-api.vercel.app/send-email-user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.ok) {
          setIsSuccess(true);
          email("");
          setError(false);
          setIsLoading(false);
        } else {
          console.error("Form submission error:", response.statusText);
          setError(true);
        }
      } catch (error) {
        console.error("Error", error);
        setError(true);
      }
    };
    joinApi();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  }, [isSuccess]);

  return (
    <Layout>
      <div className="dark:text-white text-black">
        <div className="grid gap-5 lg:w-[55%] mr-auto">
          <p className="text-4xl sm:text-6xl font-montserrat font-bold ">
          Full-Stack AI Developer
          </p>
          <p className="text-base dark:text-zinc-500 font-montserrat">
          I’m Shubham, a full-stack developer based in Bengaluru. I specialize in building scalable web applications and end-to-end AI-driven solutions using the MERN stack,
           machine learning, and natural language processing technologies, empowering users to interact with data in innovative ways.
          </p>
          <div className="flex gap-3 ">
            <div className="cursor-pointer">
              <a
                href="https://x.com/Shubham9951200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                >
                  <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                </svg>
              </a>
            </div>
            <div className="cursor-pointer">
              <a
                href="https://github.com/shubham-petwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="cursor-pointer">
              <a
                href="https://www.linkedin.com/in/shubham-petwal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-5 grid lg:grid-cols-2 gap-2 md:gap-4 pb-3">
          <div className="grid grid-rows-3">
            {articles.map((artcile) => {
              return (
                <Link to={artcile.link}>
                  <div className="grid gap-4 p-3  rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-900  transition-transform transform hover:scale-95 duration-300 cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <div className="w-[2px] h-3 bg-slate-700"></div>
                      <p className="text-base text-gray-500 ">{artcile.date}</p>
                    </div>
                    <div>
                      <p className="md:text-lg text-sm font-montserrat font-bold">
                        {artcile.title}
                      </p>
                    </div>
                    <div>
                      <p className=" lg:text-base text-sm  text-gray-500 font-medium font-montserrat">
                        {artcile.content}
                      </p>
                    </div>
                    <div>
                      <p className=" text-base lg:text-lg font-medium text-cyan-500 dark:text-red-600">
                        Read article ➔
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" grid gap-4 md:w-[80%] mx-auto border-solid border-2 border-[#a0a0a0] dark:border-[#3e3e3e] p-4 rounded-xl ">
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="h-6 w-6 flex-none"
                  >
                    <path
                      d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                      class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                    ></path>
                    <path
                      d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                      class="stroke-zinc-400 dark:stroke-zinc-500"
                    ></path>
                  </svg>
                </div>
                <p className="text-center text-base font-medium">
                  Stay up to date
                </p>
              </div>
              <div>
                <p className="lg:text-base text-sm  text-gray-500 font-medium">
                  Get notified when I publish something new, and unsubscribe at
                  any time.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <input
                    type="email"
                    vlaue={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" border-solid border-2 border-[#a0a0a0] rounded-lg dark:bg-[#3e3e3e] p-1"
                  />
                  <button
                    type="submit"
                    className="py-1 px-3 text-white font-montserrat font-normal rounded-lg bg-zinc-800 dark:bg-red-700 "
                  >
                    {isLoading ? "sending" : "Join"}
                  </button>
                </div>
                {isSuccess && (
                  <p className=" text-sm text-green-600">
                    Thank you for subscribing! You'll receive updates soon.
                  </p>
                )}
                {isError && (
                  <p className=" text-red-600">
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            </div>
            <div>
              <div className=" grid gap-4 md:w-[80%] mx-auto border-solid border-2 border-[#a0a0a0] dark:border-[#3e3e3e] p-4 rounded-xl ">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="h-6 w-6 flex-none"
                  >
                    <path
                      d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                      class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                    ></path>
                    <path
                      d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                      class="stroke-zinc-400 dark:stroke-zinc-500"
                    ></path>
                  </svg>
                  <p className="text-center text-base font-medium">Work</p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className=" w-[15%] ">
                      <img
                        src={geekyants}
                        className="rounded-full  shadow-lg  "
                      />
                    </div>
                    <div>
                      <p className="font-semibold cursor-pointer">
                        <a href="https://geekyants.com/" target="_blank">
                          GeekyAnts
                        </a>
                      </p>
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:gap-10">
                        <p className="text-sm lg:text-base text-gray-500">
                        Full-Stack AI Developer
                        </p>
                        <p className="text-xs md:text-sm lg:text-base lg:text-right text-gray-500">
                          May 2022 - Present
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
