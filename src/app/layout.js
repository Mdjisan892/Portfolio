import Particles from "@/Components/Animation/Particles";
import "./global.css";
import ContextApi from "@/ContextAPI";
import Navber from "@/Navber";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jisan - Interactive Front-end Developer",
  description: "Md Jisan - Be sure to checkout this before internet close",
  icons : {
    icon : "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="false"
        className={`${geistSans.variable} ${geistMono.variable} font-['Nunito'] antialiased w-full min-h-[90vh] relative bg-[#EBEBEB] dark:bg-[#1C1D25] dark:accent-[#646cff] scroll-smooth`}
      >
        <div className="absolute w-full h-[100vh] z-10 ">
          <Particles
            particleColors={["#412867"]}
            particleCount={300}
            particleSpread={6}
            speed={0.3}
            particleBaseSize={170}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <ContextApi>
          <Navber />
          {children}
          <Footer/>
        </ContextApi>
      </body>
    </html>
  );
}
