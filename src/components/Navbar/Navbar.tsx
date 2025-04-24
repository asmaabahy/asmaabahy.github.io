import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import SideMenu from "./SideMenu";
import { navbarItem } from "../../constants/interfaces";

const navbarItems: navbarItem[] = [
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const navBackgroundColor =
    "h-full relative px-3 xs:px-6 md:px-8 3xl:px-32 3xl:py-16 w-full flex items-center bg-velvet-900/10 backdrop-blur-md";

  return (
    <>
      {/* md screen navbar */}
      <nav className={navBackgroundColor + " hidden md:flex justify-end"}>
        <ul className="flex flex-row gap-10 ">
          {navbarItems.map((item) => (
            <li
              key={item.label}
              className="flex-nowrap w-20 shrink-0 flex flex-col gap-1 justify-between items-center text-xl lg:text-2xl 3xl:text-5xl"
            >
              <motion.span
                whileHover={{
                  scale: item.path !== location.pathname ? 1.1 : 1,
                }}
              >
                <NavLink to={item.path}>{item.label}</NavLink>
              </motion.span>
              {item.path === location.pathname && (
                <motion.hr
                  layoutId="tabId"
                  className="border bg-white w-full"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile & tab screen navbar */}
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
          <SideMenu
            navbarItems={navbarItems}
            onHideMenu={() => setShowMenu(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
