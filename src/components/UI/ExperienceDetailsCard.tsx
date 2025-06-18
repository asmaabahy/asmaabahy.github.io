import { AnimatePresence, motion } from "motion/react";
import { Experience } from "../../constants/interfaces";
import { FaCircle } from "react-icons/fa6";
import { useState } from "react";

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const transition = {
  type: "spring",
};

function ExperienceDetailsCard({ experience }: { experience: Experience }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.article
      variants={item}
      transition={transition}
      className="rounded-xl p-5 bg-neutral-400/10"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-2xl font-medium text-neutral-50 mb-3">
            {experience.position}
          </h1>
          <a
            href={experience.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-neutral-50 hover:underline"
          >
            {experience.company}
          </a>
        </div>
        <span className="text-lg text-neutral-50 whitespace-nowrap">
          {experience.date}
        </span>
      </div>

      {!showMore && (
        <p
          className="underline underline-offset-4 cursor-pointer"
          onClick={() => setShowMore(true)}
        >
          Show tasks..
        </p>
      )}

      <AnimatePresence mode="wait">
        {showMore && (
          <>
            <motion.ul
              exit={{ height: 0 }}
              initial={{ height: 0 }}
              animate={{ height: "auto"}}
              transition={{type: 'tween'}}
              className="mt-3 space-y-2 mb-3"
            >
              {experience.description.map((task, index) => (
                <li
                  key={index}
                  className="flex text-lg items-baseline gap-2 text-neutral-50"
                >
                  <FaCircle className="text-[6px] mt-[6px] text-neutral-50 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </motion.ul>
            <p
              className="underline underline-offset-4 cursor-pointer"
              onClick={() => setShowMore(false)}
            >
              Hide tasks..
            </p>
          </>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ExperienceDetailsCard;
