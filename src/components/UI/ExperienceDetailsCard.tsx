import { AnimatePresence, motion } from "motion/react";
import { Experience } from "../../constants/interfaces";
import { FaCircle } from "react-icons/fa6";
import { useState } from "react";

function ExperienceDetailsCard({ experience }: { experience: Experience }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="card rounded-xl w-full p-5 text-foreground bg-primary/10">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-2xl font-medium  mb-3">{experience.position}</h1>
          <a
            href={experience.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-primary hover:underline"
          >
            {experience.company}
          </a>
        </div>
        <span className="text-lg text-foreground whitespace-nowrap">
          {experience.date}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {showMore && (
          <>
            <motion.ul
              exit={{ height: 0 }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ type: "tween" }}
              className="mt-3 overflow-y-hidden space-y-2 mb-3"
            >
              {experience.description.map((task, index) => (
                <li key={index} className="flex text-lg items-baseline gap-2 ">
                  <FaCircle className="text-[6px] mt-[6px] shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
      <p
        className="hover:scale-110 px-2 py-1 w-fit cursor-pointer"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Hide details.." : "Show details.."}
      </p>
    </article>
  );
}

export default ExperienceDetailsCard;
