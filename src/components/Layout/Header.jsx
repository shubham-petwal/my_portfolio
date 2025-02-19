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
      name: "Project Demos",
      to: "/videos",
    },
    {
      name: "Testimonials",
      to: "/testimonials",
    },
    {
      name: "Contact",
      to: "/contact-me",
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
    <header
      className={`fixed inset-x-0 top-0 z-50
                 transition-all duration-300 ${
                   showHeader ? "translate-y-0" : "-translate-y-full"
                 }`}
    >
      <div className="bg-white/70 dark:bg-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo/Home Link */}
              <button
                onClick={() => handleNavigation("/")}
                className="flex items-center gap-2"
              >
                <img
                  src={shubham}
                  alt="Shubham"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-gray-800 dark:text-white">
                  Shubham
                </span>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navigateMenu.map(({ name, to }) => (
                  <button
                    key={to}
                    onClick={() => handleNavigation(to)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === to
                        ? "bg-cyan-50 text-cyan-500 dark:bg-red-900/20 dark:text-red-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </nav>

              {/* Right Side Controls */}
              <div className="flex items-center gap-2">
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
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 
                           hover:bg-gray-200 dark:hover:bg-zinc-700
                           transition-all duration-300 md:hidden"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-5 h-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden fixed inset-x-0 top-16 bg-white/90 dark:bg-black/90 
                       backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800
                       transition-all duration-300 z-50 ${
                         isMenuOpen 
                           ? "translate-y-0 opacity-100 pointer-events-auto" 
                           : "-translate-y-full opacity-0 pointer-events-none"
                       }`}
            style={{ touchAction: 'auto' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
              {navigateMenu.map(({ name, to }) => (
                <button
                  key={to}
                  onClick={() => handleNavigation(to)}
                  className={`w-full px-4 py-2 text-left rounded-lg text-sm font-medium 
                             transition-all duration-300 cursor-pointer ${
                               location.pathname === to
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
    </header>
  );
};

export default Header;
