import { EXPERIENCE } from "../../constants/constants";
import { Experience as ExperienceInterface } from "../../constants/interfaces";
import ExperienceDetailsCard from "../UI/ExperienceDetailsCard";

function Experience() {
  return (
    <section className="py-24 px-4 relative select-none ">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Work <span className="text-primary">Experience</span>
      </h1>
      <div className="grid grid-cols-1 gap-3 max-w-4xl mx-auto mb-10">
        {EXPERIENCE.map((experience: ExperienceInterface) => (
          <ExperienceDetailsCard key={experience.id} experience={experience} />
        ))}
      </div>
      <hr className="border-t-4 border-dotted mb-10 mx-auto max-w-4xl" />
      <div className="p-3 rounded-2xl mb-10 mx-auto max-w-4xl">
        <h1 className="text-xl md:text-2xl mb-4 w-fit font-semibold">
          Education :
        </h1>
        <p className="text-xl md:text-2xl">Computer Engineering</p>
        <p className="text-lg hover:underline">
          <a
            href="https://aiac.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            @ Mohammed VI International Academy of Civil Aviation (2020 -2023)
          </a>
        </p>
      </div>
      <hr className="border-t-4 border-dotted mx-auto max-w-4xl" />
    </section>
  );
}

export default Experience;
