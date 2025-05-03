import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router";
import { SideMenuProps } from "../../constants/interfaces";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navBackgroundColor =
  "h-full relative px-3 xs:px-6 md:px-8 3xl:px-32 3xl:py-16 w-full flex items-center bg-neutral-900/70 backdrop-blur-md";

export default function SideMenu({ navbarItems }: SideMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {!showMenu && (
        <nav className={navBackgroundColor + " md:hidden justify-start"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowMenu(true)}
            className="cursor-pointer"
          >
            <FaBars className="text-3xl hover:scale-110" />
          </motion.button>
        </nav>
      )}

      <AnimatePresence>
        {showMenu && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { type: "tween" } }}
            exit={{ x: "-100%", transition: { type: "tween" } }}
            className="bg-neutral-800/70 backdrop-blur-md fixed z-50 left-0 top-1 bottom-1 w-[80%] sm:w-[70%] rounded-tr-2xl rounded-br-2xl flex flex-col p-4 md:hidden"
          >
            <div className="flex flex-row justify-end items-center px-4 py-3 h-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowMenu(false)}
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
                    whileHover={{ backgroundColor: "rgb(255,255,255,0.2)" }}
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

            <div className="py-2">
              <p className="text-sm text-center">Asmaa Bahy © 2025</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
