import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-7xl flex-col bg-white dark:bg-black text-white dark:text-white min-h-screen">
        <Header />
        <main className="relative flex mt-20 mx-auto px-6 lg:max-w-7xl lg:px-8">
          {children}
          <div className=" right-0 top-[360px] hidden md:block fixed   rotate-90">
            <Link
              to="/contact-me"
              class="group relative inline-block overflow-hidden rounded border  border-[#a0a0a0] dark:border-[#3e3e3e]  px-12 py-3 text-sm font-medium text-slate-800 hover:text-red-600 focus:outline-none focus:ring active:bg-red-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-red-600 transition-all duration-200 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-red-600 transition-all duration-200 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-red-600 transition-all duration-200 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-red-600 transition-all duration-200 group-hover:h-full"></span>
              <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                CONNECT
              </p>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
