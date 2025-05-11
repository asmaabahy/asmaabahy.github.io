import { NavLink, useLocation } from "react-router";
import { motion } from "motion/react";
import { navbarItem } from "../../constants/interfaces";
import SideMenu from "./SideMenu";

const navbarItems: navbarItem[] = [
  { path: "/", label: "Home", underConstruction: false },
  { path: "/blog", label: "Blog", underConstruction: true },
  { path: "/contact", label: "Contact", underConstruction: true },
];

export default function Navbar() {
  const location = useLocation();
  const navBackgroundColor =
    "h-full relative flex items-center";

  return (
    <>
      {/* md screen navbar */}
      <nav
        className={
          navBackgroundColor + " hidden md:flex justify-center items-center w-full py-2 "
        }
      >
        <ul className="rounded-full flex flex-row gap-10 bg-neutral-900/70 backdrop-blur-md h-full w-[50%] justify-evenly items-center px-3 xs:px-6 md:px-8 3xl:px-32 3xl:py-16">
          {navbarItems.map((item) => (
            <>
              <motion.li
                key={item.label}
                className="relative flex-nowrap w-24 shrink-0 flex flex-col gap-1 justify-between items-center text-xl lg:text-2xl 3xl:text-5xl"
              >
                <motion.span
                  whileHover={{
                    scale: item.path !== location.pathname ? 1.1 : 1,
                  }}
                >
                  <NavLink to={item.path}>{item.label}</NavLink>
                </motion.span>
              </motion.li>
            </>
          ))}
        </ul>
      </nav>

      {/* mobile & tab screen navbar */}
      <SideMenu navbarItems={navbarItems} />
    </>
  );
}
