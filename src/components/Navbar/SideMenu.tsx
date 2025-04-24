// import { FaDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router";
import { SideMenuProps } from "../../constants/interfaces";
import { motion } from "motion/react";

/* const links = [
  { link: "", label: "Download my resume", icon: FaDownload },
  {
    link: "https://github.com/asmaabahy",
    label: "Visit my GitHub",
    icon: FaGithubSquare,
  },
  {
    link: "https://linkedin.com/in/asmaabahy",
    label: "Connect on LinkedIn",
    icon: FaLinkedin,
  },
]; */

export default function SideMenu({ navbarItems, onHideMenu }: SideMenuProps) {
  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { type: "tween" } }}
      exit={{ x: "-100%", transition: { type: "tween" } }}
      className="bg-neutral-800 fixed z-50 left-0 top-0 bottom-0 w-[80%] sm:w-[70%] rounded-tr-2xl rounded-br-2xl flex flex-col p-4 md:hidden"
    >
      <div className="flex flex-row justify-end items-center px-4 py-3 h-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={onHideMenu}
          className="cursor-pointer"
        >
          <FaXmark className="h-7 w-7" />
        </motion.button>
      </div>

      {/* menu */}
      <div className="mb-auto">
        <ul className="flex flex-col items-center justify-center">
          {navbarItems.map((item) => (
            <motion.li
              whileHover={{ backgroundColor: "rgb(255,255,255,0.5)" }}
              key={item.label}
              className=" w-full flex flex-row justify-center items-center rounded-2xl "
            >
              <NavLink
                to={item.path}
                className="w-full h-full py-3 text-center"
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* links */}
      {/* <div className="mb-auto bg-white/15 rounded-2xl p-4">
        <h1 className="mb-4">Contact & Links</h1>
        <ul className="flex flex-col gap-3">
          {links.map((item) => (
            <motion.li
              key={item.link}
              className="group border rounded-2xl relative"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-3 px-4 py-2 rounded-md"
              >
                <item.icon className="text-2xl" />
                <span className="font-medium">{item.label}</span>
              </a>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/50 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div> */}
      <div className="py-2">
        <p className="text-sm text-center">Asmaa Bahy © 2025</p>
      </div>
    </motion.nav>
  );
}
