import { motion } from "motion/react";
import { EXPERIENCE } from "../constants/constants";
import { Experience as ExperienceInterface } from "../constants/interfaces";
import ExperienceDetailsCard from "../components/UI/ExperienceDetailsCard";

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
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 w-[90%] md:w-[70%] gap-3"
      >
        {EXPERIENCE.map((experience: ExperienceInterface) => (
          <ExperienceDetailsCard key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </>
  );
}

export default Experience;
