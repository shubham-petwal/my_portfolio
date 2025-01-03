import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const navigateMenu = [
    {
      name: "About",
      to: "/about-me",
      width: 8,
    },
    {
      name: "Skills",
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
  return (
    <>
      <div className="sm:px-8">
        <div className=" lg:px-8">
          <div className="border-t border-zinc-100 pt-10 pb-16">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex gap-6 text-sm font-medium text-zinc-600 ">
                    {navigateMenu.map(({ name, to }) => {
                      return (
                        <p className="transition  hover:text-cyan-500 dark:hover:text-cyan-400" onClick={()=>navigate(to)}>
                          {name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="text-sm text-zinc-400 ">
                    © {new Date().getFullYear()} Shubham{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
