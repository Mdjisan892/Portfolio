"use client";
import { useEffect } from "react";
import MoonIcon from "./SVGs/MoonIcon";
import SunIcon from "./SVGs/SunIcon";
import { useTheme, useAboutButton } from "@/ContextAPI";

function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-none outline-none transition duration-200 ease-in-out cursor-pointer z-20"
      aria-label="Toggle theme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function AboutMeButton() {
  useEffect(() => {
    console.log(document.documentElement.clientHeight);
  }, []);
  const { setAboutPageOpen } = useAboutButton();
  return (
    <button
      onClick={() => setAboutPageOpen((prevValue) => !prevValue)}
      className="relative flex gap-2 bg-[#4595eb] py-2 px-2 md:px-5 mt-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white hover:scale-110 ease-in-out duration-100 delay-100 group z-20"
    >
      About Me
      <svg
        className="dark:fill-white fill-[#1f2667e6] absolute w-5 h-5 stroke-2 ml-[4.7rem] md:ml-[5.25rem] mt-[2px] transition duration-250 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 476.213 476.213"
      >
        <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
      </svg>
    </button>
  );
}

function LatestWorkButton() {
  return (
    <div className="relative flex gap-2 bg-[#4595eb] py-2 px-2 md:px-5 mt-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white hover:scale-110 ease-in-out duration-100 delay-100 group z-20 cursor-default">
      Latest Work
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width="44"
        height="44"
        viewBox="0 0 100 100"
        className="absolute rotate-90 left-1/2 -translate-x-1/2 top-9 group-hover:top-12 ease-in-out duration-100"
      >
        <g transform="translate(0,-952.36218)">
          <path
            className="dark:fill-white fill-[#1f2667e6] inline transform-none"
            d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
          />
        </g>
      </svg>
    </div>
  );
}

function ProjectsButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="relative flex gap-2 bg-[#4595eb] py-2 px-2 md:px-5 mt-5 rounded font-extrabold bg-gradient-to-l from-red-600 to-[#be173be6] text-white hover:scale-110 ease-in-out duration-100 delay-100 group z-20"
    >
      Take a look
      <svg
        className="fill-white  absolute w-5 h-5 stroke-2 ml-[5rem] md:ml-[5.75rem] mt-[2px] transition duration-250 group-hover:translate-x-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 476.213 476.213"
      >
        <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
      </svg>
    </a>
  );
}

function ScrollTop() {
  return (
    <div
      role="button"
      onClick={() => window.scrollTo({ top: 0 })}
      className="group inline-block mx-auto h-[95px] w-[95px] mb-6 cursor-pointer transition duration-300 ease-in-out dark:hover:text-white/60 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        className="h-full w-full"
      >
        <title className="p-2 ">top</title>
        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)">
          <path d="M1225 1468 c-79 -29 -147 -104 -185 -207 -12 -30 -41 -136 -65 -235 -61 -256 -85 -315 -154 -389 -46 -50 -78 -66 -160 -81 l-66 -13 53 -11 c65 -15 155 -15 203 -2 82 23 160 106 199 213 12 32 43 146 70 253 85 340 148 426 324 443 l71 7 -72 17 c-80 19 -172 21 -218 5z" />
          <path d="M862 1443 c-39 -19 -70 -59 -78 -102 l-6 -31 115 0 c110 0 117 1 128 23 6 12 29 46 51 75 l39 52 -108 0 c-79 0 -117 -5 -141 -17z" />
          <path d="M533 930 c-93 -56 -81 -166 27 -264 94 -84 153 -84 230 0 47 51 50 64 13 64 -53 0 -108 22 -144 59 -30 29 -40 50 -50 99 -14 69 -24 74 -76 42z" />
        </g>
      </svg>
    </div>
  );
}

export {ThemeButton, AboutMeButton, LatestWorkButton, ProjectsButton, ScrollTop};