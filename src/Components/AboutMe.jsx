"use client";
import { useAboutButton } from "@/ContextAPI";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { LiaCss3 } from "react-icons/lia";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import Waves from "./Animation/Waves";

const styles = {
  main: "group p-2 rounded-full hover:bg-gray-200 transition duration-300",
};

function AboutMe({ disabled = false, className = "", speed = 5 }) {
  const { aboutPageOpen, setAboutPageOpen } = useAboutButton();
  const animationDuration = `${speed}s`;

  return (
    <>
      {aboutPageOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 p-4 sm:p-10">
          <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-xl shadow-lg overflow-hidden">
            <div className="md:w-1/2 h-[600px] p-6 md:p-10 bg-[#1C1D25] text-white relative flex flex-col justify-center">
              <div className="text-[15rem] absolute opacity-5 -mt-72 z-10 cursor-default">
                About
              </div>

              <button
                onClick={() => setAboutPageOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-red-600 text-3xl font-bold z-20"
                aria-label="Close popup"
              >
                ×
              </button>

              <h1 className="text-4xl font-bold mt-24 z-20 relative">
                About Me.
              </h1>

              <h3
                className={`dark:text-[#b5b5b5a4] mb-8 text-md italic text-[#4C4F65] bg-clip-text inline-block ${
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

              <div className="flex flex-col gap-3 text-base leading-7">
                <p>
                  I am{" "}
                  <span className="text-red-600 font-bold">
                    MD Jisan Hossain
                  </span>
                  , a{" "}
                  <span className="text-red-600 font-bold">
                    Front-end Developer
                  </span>{" "}
                  who loves designing and building modern web applications.
                </p>

                <p>
                  I help business owners and developers design & develop
                  websites that match their vision and attract visitors.
                </p>

                <p>
                  I work on rich web experiences and{" "}
                  <span className="text-red-600 font-semibold">
                    web applications.
                  </span>
                </p>

                <p>
                  When not working, I study how to improve my skills — and yes,{" "}
                  <span className="text-red-600 font-semibold">I'm for hire.</span>
                </p>
              </div>

              <div className="flex gap-4 mt-6 flex-wrap">
                <div className={`${styles.main} animate_float_slow`}>
                  <AiOutlineHtml5 className="text-3xl group-hover:text-orange-600 transition duration-300" />
                </div>
                <div className={`${styles.main} animate_float_fast`}>
                  <LiaCss3 className="text-3xl group-hover:text-blue-500 transition duration-300" />
                </div>
                <div className={`${styles.main} animate_float_medium`}>
                  <RiTailwindCssFill className="text-3xl group-hover:text-cyan-500 transition duration-300" />
                </div>
                <div className={`${styles.main} animate_float_fast`}>
                  <TbBrandJavascript className="text-3xl group-hover:text-yellow-400 transition duration-300" />
                </div>
                <div className={`${styles.main} animate_float_medium`}>
                  <IoLogoReact className="text-3xl group-hover:text-sky-400 transition duration-300" />
                </div>
                <div className={`${styles.main} animate_float_fast`}>
                  <RiNextjsLine className="text-3xl group-hover:text-black transition duration-300" />
                </div>
                <div className={`${styles.main} animate_float_slow`}>
                  <SiRedux className="text-3xl group-hover:text-purple-500 transition duration-300" />
                </div>
              </div>
            </div>

            <div className="hidden md:block relative md:w-1/2 h-[600px] overflow-hidden rounded-rb-lg rounded-rt-lg z-20 bg-[#1C1D25]">
              <Waves
                lineColor="rgba(0, 255, 255, 0.15)"
                backgroundColor="linear-gradient(135deg, rgba(28, 29, 37, 1), rgba(26, 26, 46, 1))"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;
