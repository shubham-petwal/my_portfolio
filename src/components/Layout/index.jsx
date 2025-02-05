import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>

        {/* Floating Contact Button with Animation */}
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <Link
            to="/contact-me"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 dark:bg-red-500 
                     text-white font-medium rounded-full shadow-lg hover:shadow-xl 
                     transform hover:scale-105 transition-all duration-300
                     animate-wiggle hover:animate-none"
          >
            <span className="animate-pulse">Let's Talk</span>
            <svg 
              className="w-5 h-5 animate-swing" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
