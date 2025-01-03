import React, { useState, useEffect } from "react";
import moon from "../../assets/moon.svg";
import downArrow from "../../assets/downArrow.svg";
import sun from "../../assets/sun.svg";
import shubham from "../../assets/shubham_profile.jpeg";
import { MenuModal } from "../miscellaneous/menuModal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigate = useNavigate();

  const navigateMenu = [
    {
      name: "About",
      to: "/about-me",
      width: 8,
    },
    {
      name: "Skils",
      to: "/skills",
      width: 10,
    },
    {
      name: "Project",
      to: "/projects",
      width: 10,
    },
    {
      name: "Use",
      to: "/working-in-progress",
      width: 6,
    },
  ];
  3;

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

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="pt-2 px-4 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-1 ">
            <img
              src={shubham}
              onClick={() => navigate("/")}
              className="rounded-full cursor-pointer lg:w-[10%] md:w-[25%] sm:[35%] w-[45%] shadow-lg border-solid border-2 border-[#3e3e3e]"
            />
          </div>
          <div className="hidden md:flex justify-center gap-5 p-[6px] px-6 rounded-full border-solid border-2   bg-white shadow-lg dark:bg-[#1d1d1d] border-[#3e3e3e]">
            {navigateMenu.map(({ name, to }) => (
              <div
                key={to}
                onClick={() => navigate(to)}
                className="cursor-pointer font-montserrat relative dark:text-white hover:underline hover:underline-offset-[12px] hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300 text-black "
              >
                {name}
              </div>
            ))}
          </div>
          <div className="md:hidden ">
            <MenuModal>
              <div className="flex gap-2 items-center dark:bg-black bg-white">
                <p className="font-montserrat dark:text-white text-black ">
                  Menu ⮟
                </p>
              </div>
            </MenuModal>
          </div>
          <div className="flex-1 flex justify-end">
            <div
              onClick={toggleTheme}
              className="rounded-full px-3 py-2 cursor-pointer bg-white border-solid border-2 shadow-lg  dark:bg-[#1d1d1d] border-[#3e3e3e]  "
            >
              {theme === "light" ? (
                <img
                  src={moon}
                  alt="Switch to dark mode"
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={sun}
                  alt="Switch to light mode"
                  //   onClick={toggleTheme}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
