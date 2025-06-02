import Project from "./Project";

export default function MyProjects() {
  return (
    <main className="h-full w-full dark:text-white text-[#4C4F65] overflow-hidden p-4 dark:bg-slate-950 bg-[#F3F3F3]">
      <div className=" grid place-content-center sticky top-0 h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] m-3 p-3">
          <p className="2xl:text-md text-sm font-bold text-[#B19386] text-center tracking-tight leading-[120%] mt-2">
            CASE STUDIES
          </p> 
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] mb-5">
            Latest Works
          </h1>
        </div>
      </div>
      <Project />
    </main>
  );
}
