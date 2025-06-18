import { NavLink, useLocation } from "react-router";
import { motion } from "motion/react";
import { navbarItem } from "../../../constants/interfaces";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";

const navbarItems: navbarItem[] = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.screenY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={
          "fixed z-30 w-full transition-all duration-300 " +
          (isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5")
        }
      >
        <div className="container flex items-center justify-between ">
          <span className="relative z-10 text-2xl font-bold text-primary flex items-center">
            <span className="text-glow text-foreground">Asmaa</span>
            <span className="text-primary">Bahy</span>
          </span>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden md:flex space-x-8 px-8 3xl:px-32 3xl:py-16"
          >
            {navbarItems.map((item) => (
              <motion.li
                variants={listItem}
                key={item.label}
                className={`hover:text-primary hover:text-glow flex-nowrap shrink-0 flex flex-col gap-1 justify-between items-center text-xl 3xl:text-5xl ${ item.path === location.pathname && "underline"} `}
              >
                <span>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </span>
                {/* item.path === location.pathname && (
                  <motion.div
                    layoutId="active-link"
                    className=" h-1 w-full bg-foreground/80 rounded-md"
                    style={{ originY: "0px" }}
                  />
                ) */}
              </motion.li>
            ))}
          </motion.ul>

          {/* mobile & tab screen navbar */}
          <SideMenu />
        </div>
      </nav>
    </>
  );
}
