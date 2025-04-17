import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { FaBars, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaDownload, FaXmark } from "react-icons/fa6";

const navbarItems = [
  { path: "/", label: "Home" },
  { path: "blog", label: "Blog" },
  { path: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackgroundColor =
    "h-full relative px-3 xs:px-6 md:px-8 3xl:px-32 3xl:py-16 text-pink-100 w-full flex items-center transition-colors duration-500 " +
    (scrollY > 0 ? "bg-velvet-900/10 backdrop-blur-md" : "bg-transparent");

  return (
    <>
      <nav className={navBackgroundColor + " hidden md:flex justify-end"}>
        <ul className="flex flex-row gap-10 ">
          {navbarItems.map((item) => (
            <li
              key={item.label}
              className="flex-nowrap shrink-0 flex flex-row justify-center items-center text-xl lg:text-2xl text-white 3xl:text-5xl"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  ` font-semibold ${
                    isActive ? "text-yellow-300" : "text-white hover:scale-110"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {!showMenu && (
        <nav className={navBackgroundColor + " justify-start"}>
          <button
            onClick={() => setShowMenu(true)}
            className="md:hidden cursor-pointer"
          >
            <FaBars className="text-3xl hover:scale-110" />
          </button>
        </nav>
      )}

      {showMenu && (
        <nav className="py-4 z-50 w-[85%] fixed top-0 bottom-0 flex flex-col gap-10 bg-velvet-700 text-pink-100 md:hidden">
          <div className="w-full flex items-center justify-center px-4 py-2 relative">
            <button
              onClick={() => setShowMenu(false)}
              className="text-3xl absolute right-5 hover:scale-110 cursor-pointer"
            >
              <FaXmark />
            </button>

            <h1 className="text-center poetsen-one-regular text-xl xs:text-2xl">
              Asmaa Bahy
            </h1>
          </div>

          <div className="basis-1/4">
            <h1 className="text-lg xs:text-xl sm:text-2xl mb-6 w-full text-start px-4 font-semibold text-gray-800 bg-gray-100 py-2 border-b border-gray-300 tracking-wide uppercase">
              Navigation
            </h1>

            <ul className="flex flex-col mb-10 justify-center">
              {navbarItems.map((item) => (
                <li
                  key={item.label}
                  className="flex-nowrap shrink-0 flex flex-row justify-center items-center text-sm xs:text-lg sm:text-xl"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      ` font-semibold h-full py-2 flex flex-row justify-center items-center ${
                        isActive ? "bg-velvet-300 w-full" : "hover:scale-110"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-auto">
            <h1 className="text-lg xs:text-xl sm:text-2xl mb-6 w-full text-start px-4 font-semibold text-gray-800 bg-gray-100 py-2 border-b border-gray-300 tracking-wide uppercase">
              Contact & Links
            </h1>

            <div className="flex flex-col items-start justify-center gap-4 text-gray-700 text-sm xs:text-lg sm:text-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:bg-gray-100 "
              >
                <FaDownload className="text-2xl text-gray-800" />
                <span className="font-medium">Download my resume</span>
              </a>
              <a
                href="https://github.com/asmaabahy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:bg-gray-100"
              >
                <FaGithubSquare className="text-2xl text-gray-800" />
                <span className="font-medium">Visit my GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/asmaabahy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:bg-gray-100"
              >
                <FaLinkedin className="text-2xl text-blue-700" />
                <span className="font-medium">Connect with me on LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="py-2">
            <p className="text-sm text-center text-gray-500">
              Asmaa Bahy © 2025
            </p>
          </div>
        </nav>
      )}
    </>
  );
}
