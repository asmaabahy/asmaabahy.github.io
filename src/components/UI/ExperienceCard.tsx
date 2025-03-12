import { useState } from "react";
import { ExperienceCardProps } from "../../constants/interfaces";
import { FaArrowUpRightFromSquare, FaSquare } from "react-icons/fa6";

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [unrollList, setUnrollList] = useState(false);

  return (
    <article className="w-full border-l-2 border-gray-800 px-4 mb-3">
      <h1 className="text-lg xs:text-xl sm:text-2xl font-semibold tracking-wide mb-2">
        {experience.position}
      </h1>
      <h2 className="tracking-wide mb-2 flex flex-row items-center gap-3">
        <a
          href={experience.companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-1 font-semibold hover:underline"
        >
          <span>{experience.company}</span>
          <FaArrowUpRightFromSquare className="h-3 w-3" />
        </a>
        <span className="text-xs">( {experience.date} )</span>
      </h2>
      <button
        onClick={() => {
          setUnrollList((prev) => !prev);
        }}
        className="text-sm font-semibold underline"
      >
        {unrollList ? "Hide details" : "Show details"}
      </button>
      {unrollList && (
        <ul>
          {experience.description.map((task) => (
            <li
              key={task}
              className="text-sm xs:text-base flex flex-row items-baseline gap-1"
            >
              <FaSquare className="h-3 w-3 mr-2 inline-block shrink-0" />
              <span className="">{task}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
