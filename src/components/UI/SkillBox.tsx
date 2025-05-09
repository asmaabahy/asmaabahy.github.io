import { motion } from "motion/react";
import { Skill } from "../../constants/interfaces";
const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const transition = {
  type: "spring",
};



function SkillBox({skill} : {skill: Skill}) {
  return (
    <motion.div
      variants={item}
      transition={transition}
      className="bg-neutral-400/10 h-28 w-28 md:h-32 md:w-32 flex flex-col justify-center items-center gap-2 rounded-lg  font-medium"
    >
      <img src={skill.path} alt={skill.label} className="h-14 w-14" />
      <p>{skill.label}</p>
    </motion.div>
  );
}

export default SkillBox;
