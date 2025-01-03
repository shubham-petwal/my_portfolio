import React from "react";
import dog from "../../assets/working.gif";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 justify-center items-center max-h-full">
        <div className="flex justify-center items-center">
          <img src={dog} alt="gif" />
        </div>
        <div className="grid gap-2 justify-center items-center">
          <p className="text-6xl font-bold">OOPS</p>
          <p className="text-4xl font-bold">WORK IN PROGRESS</p>
          <div>
            <Link to={-1}>
              <button className="bg-[#F88D01] text-white px-4 py-2 text-xl rounded-3xl">
                GO BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
