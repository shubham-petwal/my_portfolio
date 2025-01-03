const starPositions = [
  { left: "50%", top: "0", translateX: "-52%" },
  // { right: "16px", top: "74px", translateX: "10px" },
  { left: "19px", top: "10px", translateY: "1px" },
  { right: "29px", top: "10px", translateX: "10px" },
  { right: "3px", top: "40px", translateX: "1px" },
  //   { right: "18px", top: "43px", translateX: "53px" },
  { right: "16px", top: "74px", translateX: "10px" },
];

const StarSVG = ({ position }) => (
  <div
    className="absolute"
    style={{
      left: position.left,
      top: position.top,
      right: position.right,
      transform: `translate(${position.translateX || "0"}, ${
        position.translateY || "0"
      })`,
    }}
  >
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
          fill="#f39c12"
        />
        <path
          d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
          fill="#f1c40f"
        />
      </g>
    </svg>
  </div>
);

export const StarContainer = ({ count, logo }) => (
  <div className="absolute w-32 h-32 rounded-full  bg-white dark:bg-[#1d1d1d] border-2 border-solid border-[#a0a0a0] dark:border-[#3e3e3e] xl:bottom-[160px] xl:right-[-38px] lg:top-[-35px] lg:right-[-20px] md:right-[-17px] md:top-[-48px] sm:top-[-34px] sm:right-[-22px] top-[-44px] right-[-23px]">
    {starPositions.slice(0, count).map((position, index) => (
      <StarSVG key={index} position={position} />
    ))}
    <div className="absolute flex justify-center items-center h-full">
      <img src={logo} className="w-[50%]" />
    </div>
  </div>
);
