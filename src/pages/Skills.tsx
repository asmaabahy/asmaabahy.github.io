import SkillBox from "../components/UI/SkillBox";
import { motion } from "motion/react";

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
      className="grid grid-cols-2 lg:grid-cols-6 lg:justify-items-center w-[90%] md:w-[70%] gap-3"
    >
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
    </motion.div>
  );
}

export default Skills;
