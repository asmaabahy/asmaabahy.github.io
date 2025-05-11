import { motion } from "motion/react";
import { ButtonProps } from "../../constants/interfaces";

export default function Button({ children, onClick, className, whileHover }: ButtonProps) {
  return (
    <motion.button
      whileHover={whileHover}
      transition={{ type: 'tween', ease: 'easeIn'}}
      className={"cursor-pointer " + className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
