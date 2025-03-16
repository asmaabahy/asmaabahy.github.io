import { Experience } from "./interfaces";
import i18n from "../i18n";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    position: i18n.t("experience.experience_1.position"),
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "09/23 - 09/24",
    description: [
      "experience.experience_1.tasks.task_1",
      "experience.experience_1.tasks.task_2",
      "experience.experience_1.tasks.task_3",
      "experience.experience_1.tasks.task_4",
      "experience.experience_1.tasks.task_5",
    ],
  },
  {
    id: 2,
    position: i18n.t("experience.experience_2.position"),
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "03/23 - 08/23",
    description: [
      "experience.experience_2.tasks.task_1",
      "experience.experience_2.tasks.task_2",
      "experience.experience_2.tasks.task_3",
      "experience.experience_2.tasks.task_4",
    ],
  },
];