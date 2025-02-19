import React, { useState, useEffect } from "react";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import shubham from "../../assets/shubham_profile.jpeg";
import { MenuModal } from "../miscellaneous/menuModal";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const navigateMenu = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about-me",
    },
    {
      name: "Skills",
      to: "/skills",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    {
      name: "Contact",
      to: "/contact-me",
    },
    {
      name: "Testimonials",
      to: "/testimonials",
    },
    {
      name: "Videos",
      to: "/videos",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavigation = (to) => {
    navigate(to);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-black/90 
                border-b border-gray-200 dark:border-zinc-800 transition-all duration-300
                ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={shubham}
              onClick={() => handleNavigation("/")}
              className="w-10 h-10 rounded-full cursor-pointer shadow-lg 
                       border-2 border-gray-200 dark:border-zinc-700 
                       hover:border-cyan-500 dark:hover:border-red-500 
                       transition-all duration-300"
              alt="Shubham Petwal"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigateMenu.map(({ name, to }) => (
              <button
                key={to}
                onClick={() => handleNavigation(to)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                          ${location.pathname === to
                    ? "bg-cyan-50 text-cyan-500 dark:bg-red-900/20 dark:text-red-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }`}
              >
                {name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 
                       hover:bg-gray-200 dark:hover:bg-zinc-700
                       transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <img src={moon} alt="Dark mode" className="w-5 h-5" />
              ) : (
                <img src={sun} alt="Light mode" className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 
                         hover:bg-gray-200 dark:hover:bg-zinc-700
                         transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden
                    ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-2 space-y-1">
            {navigateMenu.map(({ name, to }) => (
              <button
                key={to}
                onClick={() => handleNavigation(to)}
                className={`w-full px-4 py-2 text-left rounded-lg text-sm font-medium transition-all duration-300
                          ${location.pathname === to
                    ? "bg-cyan-50 text-cyan-500 dark:bg-red-900/20 dark:text-red-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
