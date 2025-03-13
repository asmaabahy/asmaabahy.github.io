import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { EXPERIENCES } from "../constants/constants";
import { Fragment } from "react/jsx-runtime";
import ExperienceCard from "./UI/ExperienceCard";
import AboutMeFrame from "./UI/AboutMeFrame";

export default function AllAboutMe() {
  return (
    <section
      id="about"
      className="min-h-[50vh] flex flex-col items-center bg-[#212D40] border-t-8 border-b-8 border-dotted text-white"
    >
      <div className="h-full px-5 py-10 grow flex flex-col justify-evenly items-center gap-7 md:max-w-[70%]">
        <AboutMeFrame label="About">
          <p className="text-pretty border-l-2 px-4 break-words">
            <span className="block mb-3">
              Junior Frontend Engineer, with a year of experience under my belt,
              mostly working with Nuxt.js, React.js, Tailwind CSS, and
              Bootstrap.
            </span>
            <span className="block mb-3">
              I am really into responsive design, making websites faster
              (performance optimization), and implementing designs that work for
              everyone, including people with disabilities (a11y).
            </span>
            <span className="block">
              I am currently seeking a frontend developer role where I can
              contribute and leverage my skills.
            </span>
          </p>
        </AboutMeFrame>

        <AboutMeFrame label="Experience">
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((experience) => (
              <Fragment key={experience.id}>
                <ExperienceCard experience={experience} />
              </Fragment>
            ))}
          </div>
        </AboutMeFrame>

        <AboutMeFrame label="Education">
          <div className="flex flex-col gap-1 border-l-2 px-4">
            <h3 className="text-lg font-semibold text-pretty">
              Computer Engineering
              <span className="font-light mx-2 text-sm sm:text-base">
                ( 2020 - 2023 )
              </span>
            </h3>
            <p className="text-pretty hover:underline">
              <a
                href="https://aiac.ma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohammed VI International Academy of Civil Aviation, Nouaceur,
                MA
                <FaArrowUpRightFromSquare className="h-3 w-3 inline-block mx-1" />
              </a>
            </p>
          </div>
        </AboutMeFrame>
      </div>
    </section>
  );
}
