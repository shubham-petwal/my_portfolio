import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    rating: 0,
    testimonial: "",
    profilePic: null
  });
  
  const [testimonials, setTestimonials] = useState([
      {
        "id": 2,
        "name": "Sarah Lee",
        "company": "InnovateX",
        "position": "Senior Engineering Manager",
        "rating": 5,
        "testimonial": "Shubham's ability to architect scalable systems and integrate AI-driven solutions is unparalleled. His work on our e-commerce platform significantly improved performance and user engagement.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
      },
      {
        "id": 3,
        "name": "Michael Chen",
        "company": "Cloudify",
        "position": "VP of Engineering",
        "rating": 5,
        "testimonial": "Shubham's deep understanding of cloud technologies and DevOps practices has been instrumental in optimizing our deployment pipelines. His contributions have been invaluable to our team.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
      },
      {
        "id": 4,
        "name": "Emily Zhang",
        "company": "AI Nexus",
        "position": "Lead Data Scientist",
        "rating": 5,
        "testimonial": "Working with Shubham on AI-powered chatbots was a game-changer for our platform. His expertise in NLP and RAG techniques drove a 30% increase in user engagement.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
      },
      {
        "id": 5,
        "name": "David Brown",
        "company": "NextGen Solutions",
        "position": "Product Director",
        "rating": 5,
        "testimonial": "Shubham's ability to collaborate across teams and deliver scalable solutions is remarkable. His work on API contracts and system architecture reduced downtime by 15%.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
      },
      {
        "id": 6,
        "name": "Priya Sharma",
        "company": "CodeCraft",
        "position": "Engineering Lead",
        "rating": 5,
        "testimonial": "Shubham's attention to detail and commitment to code quality are second to none. His contributions to our backend systems have been critical to our success.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
      },
      {
        "id": 7,
        "name": "Alex Turner",
        "company": "DataForge",
        "position": "CTO",
        "rating": 5,
        "testimonial": "Shubham's work on document extraction and OCR workflows was groundbreaking. His techniques ensured 95% accuracy, which was a huge win for our data processing team.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
      },
      {
        "id": 8,
        "name": "Linda Martinez",
        "company": "WebWorks",
        "position": "Senior Product Manager",
        "rating": 5,
        "testimonial": "Shubham's innovative approach to building drag-and-drop form creation tools reduced form abandonment by 40%. His work has had a direct impact on our conversion rates.",
        "profilePic": "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda"
      }
    
  ]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate form
    if (!formData.name || !formData.testimonial || !formData.rating) {
      setError("Please fill in all required fields and provide a rating");
      setIsSubmitting(false);
      return;
    }

    try {
      // Since we don't have a backend yet, we'll simulate an API call
      // and add the testimonial directly to the state
      const newTestimonial = {
        id: testimonials.length + 1,
        ...formData,
        profilePic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
        date: new Date().toISOString()
      };

      // Add new testimonial to the beginning of the list
      setTestimonials(prev => [newTestimonial, ...prev]);
      
      // Show success message
      setSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        position: "",
        rating: 0,
        testimonial: "",
        profilePic: null
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (error) {
      setError("Failed to submit testimonial. Please try again.");
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-montserrat mb-4">
            Client Testimonials
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Hear what others have to say about working with me
          </p>
        </div>

        {/* Add Testimonial Form */}
        <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Share Your Experience</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Position</label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                         bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleRatingClick(rating)}
                    className="focus:outline-none transform hover:scale-110 transition-transform"
                  >
                    <FaStar
                      className={`text-2xl ${
                        rating <= formData.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.testimonial}
                onChange={(e) => setFormData(prev => ({ ...prev, testimonial: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                         bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-cyan-500 dark:bg-red-500 text-white font-semibold rounded-lg
                       hover:bg-cyan-600 dark:hover:bg-red-600 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Testimonial"
              )}
            </button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 font-medium mt-4"
              >
                Thank you for your testimonial! It has been added successfully. ✨
              </motion.p>
            )}
          </form>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.profilePic}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position} {testimonial.company && `at ${testimonial.company}`}
                  </p>
                  <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials; 