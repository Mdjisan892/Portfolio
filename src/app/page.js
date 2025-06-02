import HeroSection from "@/Components/(HeroSection)/HeroSection";
import AboutMe from "@/Components/AboutMe";
import MyProjects from "@/Components/Projects/ProjectSection";

export default function Home() {
  return (
    <div className="bg-transparent text-black  dark:text-[#FFF] dark:accent-[#646cff] overflow-x-hidden min-h-screen flex flex-col">
      <HeroSection />

      <div>
        <MyProjects />
      </div>

      <AboutMe />
    </div>
  );
}
