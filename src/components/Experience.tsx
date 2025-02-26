import { EXPERIENCES } from "../constants/constants";
import ExperienceCard from "./UI/ExperienceCard";
import SectionTitle from "./UI/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[70vh] flex flex-col items-center bg-marian-blue"
    >
      <SectionTitle
        label="Experience"
        className="text-white self-start bg-neon-blue px-3 py-2"
      />
      <div className="grow flex flex-col justify-center items-center gap-3 p-5 w-full md:max-w-[70%]">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
