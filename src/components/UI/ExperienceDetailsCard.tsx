import { motion } from "motion/react";
import { Experience } from "../../constants/interfaces";
import { FaCircle } from "react-icons/fa6";

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const transition = {
  type: "spring",
};

function ExperienceDetailsCard({ experience }: { experience: Experience }) {
  return (
    <motion.article
      variants={item}
      transition={transition}
      className="rounded-xl p-5 bg-neutral-400/10"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-3xl font-medium text-neutral-50 mb-3">
            {experience.position}
          </h1>
          <a
            href={experience.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-neutral-50 hover:underline"
          >
            {experience.company}
          </a>
        </div>
        <span className="text-lg text-neutral-50 whitespace-nowrap">
          {experience.date}
        </span>
      </div>

      <ul className="mt-3 space-y-2">
        {experience.description.map((task, index) => (
          <li
            key={index}
            className="flex text-lg items-baseline gap-2 text-neutral-50"
          >
            <FaCircle className="text-[6px] mt-[6px] text-neutral-50 shrink-0" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default ExperienceDetailsCard;
