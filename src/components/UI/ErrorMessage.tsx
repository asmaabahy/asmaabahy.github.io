import { FaTriangleExclamation } from "react-icons/fa6";
import { motion } from "motion/react";

export default function ErrorMessage() {
  return (
    <motion.div
      animate={{
        x: [-10, 10, -10, 10, 0],
        transition: { type: "tween", duration: 0.2, ease: "easeInOut" },
      }}
      className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-red-50 text-red-700 border border-red-200 shadow-sm max-w-md mx-auto mt-20"
    >
      <h1 className="flex items-center gap-3  text-xl font-semibold">
        <FaTriangleExclamation className="text-2xl" aria-hidden="true" />
        <span>Something Went Wrong</span>
      </h1>
      <p className="text-sm mt-2">
        An unexpected error occurred. Please try again later.
      </p>
    </motion.div>
  );
}
