import ExperienceDetailsCard from "../components/UI/ExperienceDetailsCard";
import { EXPERIENCE } from "../constants/constants";
import { Experience as ExperienceInterface } from "../constants/interfaces";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function Experience() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[70%] gap-3"
    >
      {EXPERIENCE.map((experience: ExperienceInterface) => (
        <ExperienceDetailsCard key={experience.id} experience={experience} />
      ))}
    </motion.div>
  );
}

export default Experience;
