import { Experience, NavbarSection } from "./interfaces";

export const SECTIONS: NavbarSection[] = [
  { id: "#about", label: "About me" },
  { id: "#experience", label: "Experience" },
  { id: "#skills ", label: "Skills" },
  { id: "#projects ", label: "Projects" },
  { id: "#contact ", label: "Contact" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    position: "Junior Frontend Developer",
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "09/23 - 09/24",
    technologies: ["JavaScript", "NuxtJS", "TypeScript", "Tailwind"],
    description: [
      "> Contributed to the development of Fiduflex (an accounting platform) and SensioCrafts (an e-learning platform)",
      "> Built reusable Vue components.",
      "> Integrated APIs with Axios",
      "> Added multilingual support with i18n",
      "> Ensured responsive UI.",
      "> Conducted code reviews and executed Cypress E2E tests.",
    ],
  },
  {
    id: 2,
    position: "Junior Frontend Developer (Internship)",
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "03/23 - 08/23",
    technologies: ["JavaScript", "NuxtJS", "TypeScript", "Tailwind"],
    description: [
      "> Study of user stories",
      "> Contributed in Building the UI for the admin dashboard of an accounting platform using Nuxt.js and TypeScript.",
      "> Integrated ireusable components.",
      "> Ensured responsive design for all devices",
    ],
  },
];

export const coreWebTechnologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "DOM Manipulation",
];

export const frontendFrameworksLibraries = [
  "React.js",
  "Vue.js",
  "Next.js",
  "Nuxt.js",
];

export const stateManagement = ["Redux", "Context API", "Pinia", "Vuex"];

export const styling = [
  "Tailwind CSS",
  "Bootstrap",
  "styled-components",
  "Sass (SCSS)",
  "GSAP",
];

export const buildToolsPackageManagers = ["Vite"];

export const testing = ["Cypress"];

export const versionControl = ["Git", "GitHub", "GitLab"];

export const apisDataFetching = ["REST APIs", "Axios"];

export const softSkills = [
  "Problem Solving",
  "Debugging",
  "Agile, Scrum",
  "Communication",
  "Time Management",
];

export const SKILLSET = [
  { name: "Core Web Technologies", skillList: coreWebTechnologies },
  {
    name: "Frontend Frameworks/Libraries",
    skillList: frontendFrameworksLibraries,
  },
  { name: "State Management", skillList: stateManagement },
  { name: "Styling", skillList: styling },
  { name: "Version Control", skillList: versionControl },
  { name: "Soft Skills", skillList: softSkills },
];
