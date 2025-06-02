import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ScrollTop } from "./Components/Buttons";

export default function Footer() {
  return (
    <footer className="bg-[#e0d4d4]/30 dark:bg-[#111827] text-[#4C4F65] dark:text-white py-10 text-center border-t dark:border-gray-700 ">
      <ScrollTop/>

      <div className="flex justify-center space-x-8 mb-6 text-2xl">
        <a
          href="https://x.com/JisanMomi"
          target="_blank"
          className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/md-jisan-hossain-mome/"
          target="_blank"
          className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Mdjisan892"
          target="_blank"
          className="dark:hover:text-gray-300 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

      </div>

      <div className="text-sm mb-4 space-y-1">
        <p> Phone: +880 1832139099</p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:mdjisan1012345@gmail.com"
            className="underline dark:hover:text-gray-300 hover:text-gray-700"
          >
            mdjisan1012345@gmail.com
          </a>
        </p>
        <p>📍 Location: Bangladesh</p>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 dark:text-gray-400 cursor-default">
        © 2025 Md Jisan — All Rights Reserved.
      </p>
    </footer>
  );
}
