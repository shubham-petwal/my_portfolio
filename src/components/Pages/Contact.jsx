import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import cx from "classnames";
import mobileAnimation from "../../assets/mbileAnimation.json";
import Lottie from "lottie-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const payload = {
        receiver: "shubhampetwal250@gmail.com",
        subject: formData.subject,
        email: formData.email,
        message: formData.message,
        name: formData.name,
        html: `
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      };

      setIsLoading(true);

      try {
        const response = await fetch(
          "https://portfolio-backend-five-silk.vercel.app/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          setIsSuccess(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
        } else {
          console.error("Form submission error:", response.statusText);
        }
      } catch (error) {
        console.error("Error", error);
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  }, [isSuccess]);

  console.log(isSuccess);

  return (
    <Layout>
      <div className="dark:text-white text-black max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Whether you want to discuss a project
            or just say hello, I'd love to hear from you.
          </p>
        </div>

        {/* Resume Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-zinc-800/50 dark:to-zinc-900/50 rounded-2xl shadow-lg">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Open to Opportunities
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-montserrat text-gray-900 dark:text-white mb-4">
                      Ready to Make an Impact
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      As a Full-Stack AI Developer, I bring expertise in building scalable applications 
                      and implementing AI solutions. View my resume to explore my professional journey 
                      and technical capabilities.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-700/90 flex items-center justify-center">
                        <span className="text-cyan-500 dark:text-red-500">3+</span>
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-700/90 flex items-center justify-center">
                        <span className="text-cyan-500 dark:text-red-500">10+</span>
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 min-w-[200px]">
                  <a
                    href="/src/assets/shubham_3Y2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                             bg-white dark:bg-zinc-800 shadow-sm
                             text-cyan-500 dark:text-red-500 font-semibold 
                             hover:bg-cyan-500 dark:hover:bg-red-500 hover:text-white
                             transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Resume
                  </a>
                  <a
                    href="/src/assets/shubham_3Y2025.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                             bg-cyan-500 dark:bg-red-500 text-white font-semibold 
                             hover:bg-cyan-600 dark:hover:bg-red-600
                             transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-8">
          <div className="flex justify-center items-center">
            <Lottie
              animationData={mobileAnimation}
              loop
              autoplay
              className="max-w-md w-full"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-montserrat mb-4">
                Say <span className="text-cyan-500 dark:text-red-500">Namaste</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Got a question or need assistance? Feel free to reach out using
                the form below, and I'll get back to you as soon as possible!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cx(
                      `w-full bg-white/70 dark:bg-zinc-900/70 text-gray-800 dark:text-gray-200 p-3 
                       border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 
                       focus:ring-cyan-500 dark:focus:ring-red-500 focus:border-transparent transition-all`,
                      { "border-red-500 focus:ring-red-500": errors.name }
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cx(
                      `w-full bg-white/70 dark:bg-zinc-900/70 text-gray-800 dark:text-gray-200 p-3 
                       border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 
                       focus:ring-cyan-500 dark:focus:ring-red-500 focus:border-transparent transition-all`,
                      { "border-red-500 focus:ring-red-500": errors.email }
                    )}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={cx(
                  `w-full bg-white/70 dark:bg-zinc-900/70 text-gray-800 dark:text-gray-200 p-3 
                   border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 
                   focus:ring-cyan-500 dark:focus:ring-red-500 focus:border-transparent transition-all`,
                  { "border-red-500 focus:ring-red-500": errors.subject }
                )}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={cx(
                  `w-full bg-white/70 dark:bg-zinc-900/70 text-gray-800 dark:text-gray-200 p-3 
                   border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 
                   focus:ring-cyan-500 dark:focus:ring-red-500 focus:border-transparent transition-all`,
                  { "border-red-500 focus:ring-red-500": errors.message }
                )}
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
              {isSuccess && (
                <p className="text-green-500">
                  Your message has been sent successfully!✅
                </p>
              )}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 rounded-full border-[2px] border-solid hover:border-black border-[#F88D01] text-[18px] font-semibold hover:text-black hover:bg-[#F88D01] text-[#F88D01]"
                >
                  {isLoading ? "Sending..." : "Get in Touch"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
