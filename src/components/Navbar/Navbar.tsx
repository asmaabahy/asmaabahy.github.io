import { NavLink, useLocation } from "react-router";
import { motion } from "motion/react";
import { navbarItem } from "../../constants/interfaces";
import SideMenu from "./SideMenu";

const navbarItems: navbarItem[] = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* md screen navbar */}
      <nav className="rounded-lg h-full hidden md:flex justify-end items-center w-full py-4 px-6">
        <ul className="rounded-lg flex flex-row h-full w-full justify-end items-center gap-10 px-3 xs:px-6 md:px-8 3xl:px-32 3xl:py-16">
          {navbarItems.map((item) => (
            <motion.li
              key={item.label}
              className="flex-nowrap w-24 shrink-0 flex flex-col gap-1 justify-between items-center text-xl lg:text-2xl 3xl:text-5xl"
            >
              <motion.span
                whileHover={{
                  scale: item.path !== location.pathname ? 1.1 : 1,
                }}
              >
                <NavLink to={item.path}>{item.label}</NavLink>
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* mobile & tab screen navbar */}
      <SideMenu navbarItems={navbarItems} />
    </>
  );
}
