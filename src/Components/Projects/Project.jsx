import Image from "next/image";
import { ProjectsButton } from "../Buttons";

function Project() {
  const projects = [
    {
      imageUrl: "/instagram.png",
      url: "https://github.com/Mdjisan892/instagram",
      title: "Instagram UI Clone",
      content1: "Recreate the",
      content2: "social magic",
      content3: "with a",
      content4: "pixel-perfect clone",
      content5: "Design meets",
      content6: "familiarity",
      content7: "in this build.",
    },
    {
      imageUrl: "/Online-Code-Editor.png",
      url: "https://online-code-editor-0.netlify.app/",
      title: "Online Code Editor",
      content1: "Code from",
      content2: "anywhere",
      content3: "on",
      content4: "any device",
      content5: "Unleash your",
      content6: "creativity",
      content7: "without limits.",
    },
    {
      imageUrl: "/Currency-Converter.png",
      url: "https://currency-converter-app-1.netlify.app/",
      title: "Currency Converter",
      content1: "Stay updated with",
      content2: "real-time rates",
      content3: "and convert",
      content4: "instantly",
      content5: "Manage your",
      content6: "global transactions",
      content7: "seamlessly.",
    },
    {
      imageUrl: "/Expense-Tracker.png",
      url: "https://expense-tracker-a1.netlify.app/",
      title: "Expense Tracker",
      content1: "Track your",
      content2: "spending",
      content3: "and stay",
      content4: "in control",
      content5: "Achieve",
      content6: "financial freedom",
      content7: "with ease.",
    },
    {
      imageUrl: "/Memory Game.png",
      url: "https://memory-game-devolopment.netlify.app/",
      title: "Memory Challenge",
      content1: "Sharpen your",
      content2: "mind",
      content3: "with a",
      content4: "fun twist",
      content5: "Train your",
      content6: "brainpower",
      content7: "while having, fun.",
    },
    {
      imageUrl: "/Random-Password-Gen.png",
      url: "https://password-genarator-1.netlify.app/",
      title: "Password Generator",
      content1: "Create",
      content2: "strong passwords",
      content3: "and protect",
      content4: "your accounts",
      content5: "Empower your",
      content6: "security",
      content7: "in one click.",
    },
  ];

  return (
    <div className="-mt-[30rem]">
      {projects.map((projectItems, index) => (
        <div
          key={index}
          className=" relative w-[1050px] mx-auto max-w-[1100px] h-[570px] shadow-2xl overflow-hidden mt-10 transition-transform hover:scale-105 group outline-none rounded-md"
        >
          <Image
            src={projectItems.imageUrl}
            alt={projectItems.title}
            className="object-cover w-full h-full brightness-[.65] group-hover:brightness-[.5] transition duration-300"
            fill
          />

          <div className="absolute inset-0 overflow-hidden backdrop-blur-[1px]">
            <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-l from-[#111D3F] to-[#2258A3] -translate-x-full group-hover:-translate-x-0 transition-transform duration-300 ease-in-out" />
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-white group-hover:-translate-y-4 duration-300">
            <h2 className="text-4xl md:text-5xl font-bold">
              {projectItems.title}
            </h2>
            <p className="italic text-lg mt-1">
              "{projectItems.content1}{" "}
              <span className="text-red-500 font-semibold">
                {projectItems.content2}
              </span>
              , {projectItems.content3}{" "}
              <span className="text-red-500 font-semibold">
                {projectItems.content4}
              </span>
              .{projectItems.content5}{" "}
              <span className="text-red-500 font-semibold">
                {projectItems.content6}
              </span>{" "}
              {projectItems.content7}
            </p>
            <div className="mt-4 w-[7.5rem]">
              <ProjectsButton url={projectItems.url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
