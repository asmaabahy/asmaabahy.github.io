import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router";
import { navbarItem } from "../../../constants/interfaces";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const navbarItems: navbarItem[] = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
];

export default function SideMenu() {
  const sideMenu = useRef<HTMLElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const hideSideMenu = useCallback(
    (e: MouseEvent) => {
      if (showMenu && !sideMenu.current?.contains(e.target as Node)) {
        setShowMenu(false);
      }
    },
    [showMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", hideSideMenu);
    return () => document.removeEventListener("mousedown", hideSideMenu);
  }, [hideSideMenu]);

  return (
    <>
      <div onClick={() => setShowMenu(true)} className="block md:hidden">
        <FaBars className="text-3xl hover:scale-110 text-foreground" />
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.nav
            ref={sideMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { type: "tween" } }}
            exit={{ x: "100%", transition: { type: "tween" } }}
            className="bg-foreground/20 text-lg font-semibold backdrop-blur-md fixed z-50 right-0 top-1 bottom-1 w-[80%] sm:w-[70%] rounded-tl-2xl rounded-bl-2xl flex flex-col p-4 md:hidden"
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
