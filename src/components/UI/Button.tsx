import { motion } from "motion/react";
import { ButtonProps } from "../../constants/interfaces";

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="px-6 py-3 text-xl tracking-widest font-semibold bg-gradient-to-r from-vibrant-pink to-vibrant-purple rounded-full cursor-pointer"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
