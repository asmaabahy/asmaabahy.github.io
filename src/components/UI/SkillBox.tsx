import { motion } from "motion/react";

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const transition = {
  type: "spring",
};

function SkillBox() {
  return (
    <motion.div
      variants={item}
      transition={transition}
      className="bg-neutral-400/10 h-32 w-32 flex justify-center items-center rounded-lg text-white font-medium"
    >
      <p>Hello</p>
    </motion.div>
  );
}

export default SkillBox;
