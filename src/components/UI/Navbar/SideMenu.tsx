import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router";
import { navbarItem } from "../../../constants/interfaces";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navbarItems: navbarItem[] = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
];

export default function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div onClick={() => setShowMenu(true)} className="block md:hidden">
        <FaBars className="text-3xl hover:scale-110 text-amber-50" />
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { type: "tween" } }}
            exit={{ x: "100%", transition: { type: "tween" } }}
            className="bg-neutral-800/70 backdrop-blur-md fixed z-50 right-0 top-1 bottom-1 w-[80%] sm:w-[70%] rounded-tl-2xl rounded-bl-2xl flex flex-col p-4 md:hidden"
          >
            {/* menu */}
            <div className="mb-auto h-full flex flex-col justify-center">
              <ul className="flex flex-col items-center justify-center">
                {navbarItems.map((item) => (
                  <motion.li
                    whileHover={{ backgroundColor: "rgb(255,255,255,0.2)" }}
                    key={item.label}
                    className=" w-full flex flex-row justify-center items-center rounded-2xl "
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setShowMenu(false)}
                      className="w-full h-full py-3 text-center"
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="py-2">
              <p className="text-sm text-center">Asmaa Bahy © 2025</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
