import SkillBox from "../components/UI/SkillBox";
import { motion } from "motion/react";
import { DEVSTACK } from "../constants/constants";

const devStack = DEVSTACK;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Skills() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 lg:grid-cols-4 justify-items-center w-[90%] md:w-[50%] gap-3"
    >
      {devStack.map((item) => (
        <SkillBox key={item.id} skill={item} />
      ))}
    </motion.div>
  );
}

export default Skills;
