import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { SECTIONS } from "../constants/constants";
import logo from "../assets/images/logo.png"

const navbarSections = SECTIONS

export default function Navbar() {
  const navbar = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLUListElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu((prevState) => !prevState);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menu.current &&
        !menu.current.contains(event.target as Node) &&
        navbar.current &&
        !navbar.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbar}
      className="navbar px-5 py-3 flex flex-row justify-between md:justify-around items-center text-white text-xl bg-neon-blue "
    >
      <ul className="hidden md:flex flex-row justify-around w-full font-semibold drop-shadow-[2px_2px_0px_black]">
        {SECTIONS.map((section) => (
          <li key={section.id} className="hover:scale-110">
            <a href={section.id}> {section.label}</a>
          </li>
        ))}
      </ul>

      <div className="w-[50%] block md:hidden">
        <img
          src={logo}
          alt="Asmaa Bahy logo"
          className="object-cover inset-0 w-60"
        />
      </div>

      <button onClick={toggleMenu} className="block md:hidden h-7 w-7">
        {!showMenu ? (
          <FaBars className="h-full w-full" />
        ) : (
          <FaXmark className="h-full w-full" />
        )}
      </button>

      {showMenu && (
        <ul
          ref={menu}
          className="absolute h-fit top-full left-0 z-100 md:hidden w-full flex flex-col justify-evenly font-semibold bg-black"
        >
          {navbarSections.map((section) => (
            <li key={section.id} className="text-center py-3">
              <a href={section.id}> {section.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
