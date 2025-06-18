import SkillBox from "../components/UI/SkillBox";
import { motion, useInView } from "motion/react";
import { DEVSTACK } from "../constants/constants";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="grid grid-cols-3 lg:grid-cols-6 justify-items-center w-[90%] md:w-[70%] gap-3"
    >
      {devStack.map((item) => (
        <SkillBox key={item.id} skill={item} />
      ))}
    </motion.div>
  );
}

export default Skills;
