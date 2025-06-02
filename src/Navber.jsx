import Link from "next/link";
import { ThemeButton,ScrollBottom } from "./Components/Buttons";

function Navber() {
  return (
    <nav className="flex justify-between items-center px-4 dark:text-white text-[#4C4F65] w-full bg-transparent ">
      <Link
      href={"#"}
      className="group inline-block transform dark:hover:text-white/60 hover:text-gray-700 z-30  h-fit w-fit mb-6 cursor-pointer transition duration-300 ease-in-out "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        className="h-[95px] w-[95px]"
      >
        <title className="p-2 bg-gradient-to-r from-pink-600 via-red-300 to-blue-600">relode</title>
        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)">
          <path d="M1225 1468 c-79 -29 -147 -104 -185 -207 -12 -30 -41 -136 -65 -235 -61 -256 -85 -315 -154 -389 -46 -50 -78 -66 -160 -81 l-66 -13 53 -11 c65 -15 155 -15 203 -2 82 23 160 106 199 213 12 32 43 146 70 253 85 340 148 426 324 443 l71 7 -72 17 c-80 19 -172 21 -218 5z" />
          <path d="M862 1443 c-39 -19 -70 -59 -78 -102 l-6 -31 115 0 c110 0 117 1 128 23 6 12 29 46 51 75 l39 52 -108 0 c-79 0 -117 -5 -141 -17z" />
          <path d="M533 930 c-93 -56 -81 -166 27 -264 94 -84 153 -84 230 0 47 51 50 64 13 64 -53 0 -108 22 -144 59 -30 29 -40 50 -50 99 -14 69 -24 74 -76 42z" />
        </g>
      </svg>
    </Link>
      

      <ThemeButton />
    </nav>
  );
}

export default Navber;
