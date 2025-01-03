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
        receiver: "bipingowda7@gmail.com",
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
          "https://protfolio-contact-api.vercel.app/send-email",
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
      <div className="grid md:grid-cols-2">
        <div className=" flex justify-center items-center">
          {" "}
          <Lottie
            animationData={mobileAnimation}
            loop
            autoplay
            // style={{ height: "300px", width: "300px" }}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 py-4">
              <p className="font-semibold text-[30px] text-gray-500">
                Say,<span className="text-[#F88D01]">Namaste</span>
              </p>
              <p className="font-medium text-lg text-gray-500">
                Got a question or need assistance? Feel free to reach out using
                the form below, and I'll get back to you as soon as possible!
              </p>
              <div className="flex justify-start gap-2">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cx(
                      `w-full dark:bg-zinc-900 text-gray-500 p-3 border-2 border-solid border-[#a0a0a0] dark:border-[#3e3e3e]  rounded-lg`,
                      { "!border-red-500": errors.name }
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cx(
                      `dark:bg-zinc-900 w-full text-gray-500 p-3 border-2 border-solid border-[#a0a0a0] dark:border-[#3e3e3e]  rounded-lg`,
                      { "!border-red-500": errors.email }
                    )}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={cx(
                  `dark:bg-zinc-900 text-gray-500 p-3 border-2 border-solid border-[#a0a0a0] dark:border-[#3e3e3e]  rounded-lg`,
                  { "!border-red-500": errors.subject }
                )}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={cx(
                  `w-full dark:bg-zinc-900 text-gray-500 p-3 border-2 border-solid border-[#a0a0a0] dark:border-[#3e3e3e]  rounded-lg`,
                  { "!border-red-500": errors.message }
                )}
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
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
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
