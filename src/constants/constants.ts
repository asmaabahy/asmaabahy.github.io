import { Experience, Skill } from "./interfaces";

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    position: "Junior Frontend Developer",
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "09/23 - 09/24",
    description: [
      "Worked with a team of 3 frontend developers on two projects: an accounting platform and an e-learning platform.",
      "Built key frontend features, such as dynamic forms and data tables, ensuring smooth functionality and user interaction.",
      "Conducted code reviews, contributing to code quality and best practices.",
      "Integrated SEO techniques, enhancing the visibility and reach of the platforms.",
      "Implemented responsive design, ensuring compatibility across devices.",
    ],
  },
  {
    id: 2,
    position: "Junior Frontend Developer (Internship)",
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "03/23 - 08/23",
    description: [
      "Gained hands-on experience with version control (Git) and agile development processes.",
      "Developed a strong understanding of frontend technologies ( modern Javascript, Typescript, Vue.js and React.js).",
      "Participated in code reviews and discussions, learning best practices and frontend development workflows.",
      "Learned about the user stories and contributed to defining features based on user needs.",
    ],
  },
];

export const DEVSTACK : Skill[] = [
  { id: "html", label: "HTML", path: "/dev_stack_images/html5.svg" },
  { id: "css", label: "CSS", path: "/dev_stack_images/css3.svg" },
  {
    id: "javascript",
    label: "JavaScript",
    path: "/dev_stack_images/javascript.svg",
  },
  { id: "jquery", label: "JQuery", path: "/dev_stack_images/jquery.svg" },
  {
    id: "typescript",
    label: "TypeScript",
    path: "/dev_stack_images/typescript.svg",
  },
  { id: "tailwind", label: "Tailwind", path: "/dev_stack_images/tailwind.svg" },
  {
    id: "bootstrap",
    label: "Bootstrap",
    path: "/dev_stack_images/bootstrap.svg",
  },
  { id: "react", label: "ReactJS", path: "/dev_stack_images/react.svg" },
  { id: "next", label: "NextJS", path: "/dev_stack_images/next.svg" },
  { id: "vue", label: "VueJS", path: "/dev_stack_images/vue.svg" },
  { id: "nuxt", label: "NuxtJS", path: "/dev_stack_images/nuxt.svg" },
  { id: "motion", label: "Framer Motion", path: "/dev_stack_images/framer-motion.svg" },
];
