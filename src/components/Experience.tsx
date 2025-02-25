import { EXPERIENCES } from "../constants/constants";
import ExperienceCard from "./UI/ExperienceCard";
import SectionTitle from "./UI/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="h-fit bg-white p-5 flex flex-col justify-center items-center"
    >
      <SectionTitle
        label="Experience"
        className="text-black "
      />
      <div className="flex flex-col flex-wrap gap-3 md:max-w-[80%]">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
