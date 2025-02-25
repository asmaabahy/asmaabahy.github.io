import Tag from "./Tag";
import { ExperienceCardProps } from "../../constants/interfaces";

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="bg-lavender border-2 px-10 py-5 text-black drop-shadow-[-0.3rem_0.3rem_0rem_black]">
      <h1 className="text-xl font-semibold tracking-wide">
        {experience.position}
      </h1>
      <h2 className="font-semibold text-lg tracking-wide mb-5">
        <a href={experience.companyWebsite}>{experience.company}</a> |
        {experience.date}
      </h2>
      <ul className="mb-5 font-semibold">{experience.description.map(task => <li key={task}>
        {task}
      </li> )}</ul>

      <ul className="flex flex-row gap-1 flex-wrap">
        {experience.technologies.map((skill) => (
          <li key={skill}>
            <Tag skill={skill} />
          </li>
        ))}
      </ul>
    </article>
  );
}
