import { motion } from "motion/react";
import { ButtonProps } from "../../constants/interfaces";

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className={"px-6 py-3 text-xl rounded-full cursor-pointer " + className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
