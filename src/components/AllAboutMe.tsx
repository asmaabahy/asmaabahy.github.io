import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { EXPERIENCES } from "../constants/constants";
import { Fragment } from "react/jsx-runtime";
import ExperienceCard from "./UI/ExperienceCard";
import AboutMeFrame from "./UI/AboutMeFrame";
import { useTranslation } from "react-i18next";

export default function AllAboutMe() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-[50vh] flex flex-col items-center bg-gray-dark border-t-8 border-b-8 border-dotted text-white"
    >
      <div className="h-full px-5 py-10 grow flex flex-col justify-evenly items-center gap-7 md:max-w-[70%]">
        <AboutMeFrame label={t("about.heading")}>
          <p className="text-pretty border-l-2 px-4 break-words">
            <span className="block mb-3">{t("about.p1")}</span>
            <span className="block mb-3">{t("about.p2")}</span>
            <span className="block">{t("about.p3")}</span>
          </p>
        </AboutMeFrame>

        <AboutMeFrame label={t("experience.heading")}>
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((experience) => (
              <Fragment key={experience.id}>
                <ExperienceCard experience={experience} />
              </Fragment>
            ))}
          </div>
        </AboutMeFrame>

        <AboutMeFrame label={t("education.heading")}>
          <div className="flex flex-col gap-1 border-l-2 px-4">
            <h3 className="text-lg font-semibold text-pretty">
              {t("education.title")}
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
                {t("education.school")}
                <FaArrowUpRightFromSquare className="h-3 w-3 inline-block mx-1" />
              </a>
            </p>
          </div>
        </AboutMeFrame>
      </div>
    </section>
  );
}
