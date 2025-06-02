import BlurText from "../Animation/BlurText";
import { AboutMeButton } from "../Buttons";

function MyLogo({ disabled = false, speed = 5, className = "" }) {
  const animationDuration = `${speed}s`;
  return (
    <div className="relative flex items-center justify-start w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden max-h-[100vh]">
      <div className=" md:ml-10 px-4 gap-2 text-wrap text-start">
      
          <BlurText
            text={`Md Jisan Hossain`}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-6xl font-bold  dark:text-white text-[#4C4F65]  Z-10"
          />
    
        <h3
          className={`dark:text-[#b5b5b5a4] text-xs md:text-md lg:text-xl text-[#4C4F65] bg-clip-text inline-block ${
            disabled ? "" : "animate-shine"
          } ${className}`}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            animationDuration: animationDuration,
          }}
        >
          Interactive Front-end Developer
        </h3>
        <div className="z-20">
          <AboutMeButton />
        </div>
      </div>

      <div className="absolute flex items-center justify-center  inset-0 z-0">
        <svg
          className="min-w-[160%] min-h-[160%] sm:min-w-[115%] sm:min-h-[115%] ml-[3.35rem] mt-7 md:mr-5 md:mt-0 md:h-[160%] md:w-[160%] object-cover"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--start-color)" />
              <stop offset="100%" stopColor="var(--end-color)" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            className="fill-none stroke-[url(#blueGradient)] sm:fill-[url(#blueGradient)]"
            strokeWidth="25"
          >
            <path d="M1225 1468 c-79 -29 -147 -104 -185 -207 -12 -30 -41 -136 -65 -235 -61 -256 -85 -315 -154 -389 -46 -50 -78 -66 -160 -81 l-66 -13 53 -11 c65 -15 155 -15 203 -2 82 23 160 106 199 213 12 32 43 146 70 253 85 340 148 426 324 443 l71 7 -72 17 c-80 19 -172 21 -218 5z" />
            <path d="M862 1443 c-39 -19 -70 -59 -78 -102 l-6 -31 115 0 c110 0 117 1 128 23 6 12 29 46 51 75 l39 52 -108 0 c-79 0 -117 -5 -141 -17z" />
            <path d="M533 930 c-93 -56 -81 -166 27 -264 94 -84 153 -84 230 0 47 51 50 64 13 64 -53 0 -108 22 -144 59 -30 29 -40 50 -50 99 -14 69 -24 74 -76 42z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default MyLogo;
