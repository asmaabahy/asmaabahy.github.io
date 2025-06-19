import { motion } from "motion/react";
import { Skill } from "../../constants/interfaces";
const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

function SkillBox({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={item}
      transition={{
        type: "spring",
      }}
      className="bg-primary/10 text-sm h-20 w-20 md:h-24 md:w-24 flex flex-col justify-center items-center gap-2 rounded-lg  font-medium"
    >
      <img src={skill.path} alt={skill.label} className="h-10 w-10" />
      <p>{skill.label}</p>
    </motion.div>
  );
}

export default SkillBox;
