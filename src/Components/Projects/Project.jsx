import Image from "next/image";
import { ProjectsButton } from "../Buttons";

function Project() {
  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
      imageUrl: "/Memory Game.png",
      url: "https://memory-game-devolopment.netlify.app/",
      title: "Memory Challenge",
      content1: "Sharpen your",
      content2: "mind",
      content3: "with a",
      content4: "fun twist",
      content5: "Train your",
      content6: "brainpower",
      content7: "while having fun.",
    },
    {
      id: 6,
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
    <div className=" px-4 space-y-44 -mt-[45rem] sm:-mt-[25rem]">
      {projects.map((projectItems) => (
        <div key={projectItems.id} className={`relative w-full max-w-5xl mx-auto h-[350px] sm:h-[500px] md:h-[550px] overflow-hidden group transition-transform duration-500 ease-in-out hover:scale-[1.02] shadow-xl ${projectItems.id % 2 === 0 ? "lg:-ml-4 xl:ml-20" : "lg:ml-4 xl:ml-8"}`}
        >
          <p className="absolute -translate-y-full group-hover:-translate-y-0 -top-7 lg:-top-12 z-10 text-[100px] lg:text-[150px] right-0 duration-500 transition-transform easy-in-out text-white">
            0{projectItems.id}
          </p>
          <Image src={projectItems.imageUrl} alt={projectItems.title} fill sizes="(max-width: 768px) 100vw, 70vw" priority className="object-cover w-full h-full transition duration-500 ease-in-out brightness-75 group-hover:brightness-50 dark:opacity-70 group-hover:opacity-70"
          />
          <div className="absolute w-full h-full top-0 b bg-gradient-to-l from-[#111D3F]/70 to-[#2258A3]/60 transition-transform -translate-x-full group-hover:-translate-x-0 duration-500 ease-in-out" />

          <div className="absolute bottom-8 left-6 sm:left-10 right-6 text-white transition-all duration-500 ease-in-out group-hover:-translate-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {projectItems.title}
            </h2>
            <p className="italic text-base sm:text-lg mt-2 leading-snug">
              "{projectItems.content1}{" "}
              <span className="text-red-500 font-semibold">
                {projectItems.content2}
              </span>
              , {projectItems.content3}{" "}
              <span className="text-red-500 font-semibold">
                {projectItems.content4}
              </span>
              . {projectItems.content5}{" "}
              <span className="text-red-500 font-semibold">
                {projectItems.content6}
              </span>{" "}
              {projectItems.content7}"
            </p>
            <div className="mt-4 w-fit">
              <ProjectsButton url={projectItems.url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
