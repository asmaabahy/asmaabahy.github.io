import { motion } from "motion/react";
import { ButtonProps } from "../../constants/interfaces";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ children, onClick, className, whileHover }) => {
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

export default Button