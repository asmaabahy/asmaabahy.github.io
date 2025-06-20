import { Experience, Skill } from "./interfaces";

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    position: "Junior Frontend Developer",
    company: "INFLEXIT",
    companyWebsite: "https://www.inflexit.com/",
    date: "09/23 - 12/24",
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

export const DEVSTACK: Skill[] = [
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
  {
    id: "motion",
    label: "Motion",
    path: "/dev_stack_images/framer-motion.svg",
  },
];

export const PROJECTS = [
  {
    image: "src/assets/images/accounting-app/1.png",
    name: "Fiduflex",
    technologies: ["NuxtJs", "TypeScript", "Sass", "Pinia", "Axios"],
    description:
      "A SaaS solution with a subscription system designed to simplify business operations, including billing, accounting, and HR management, while adapting to growing company needs.",
    role: "As a front-end developer, I was responsible for developing responsive interfaces, integrating API endpoints, and ensuring a smooth user experience",
    keyFeatures: [
      "Invoicing and product management.",
      "Accounting tools for internal and external use.",
      "Subscription system with user and product scaling.",
    ],
    carousselPictures: [
      { id: 0, path: "/images/accounting-app/1.png" },
      { id: 1, path: "/images/accounting-app/2.png" },
      { id: 2, path: "/images/accounting-app/3.png" },
      { id: 3, path: "/images/accounting-app/4.png" },
      { id: 4, path: "/images/accounting-app/5.png" },
      { id: 5, path: "/images/accounting-app/6.png" },
      { id: 6, path: "/images/accounting-app/7.png" },
      { id: 7, path: "/images/accounting-app/8.png" },
    ],
  },
  {
    image: "src/assets/images/e-learning-app/1.png",
    name: "Sensiocrafts",
    technologies: [
      "Nuxt",
      "React",
      "flowbite",
      "Tailwind CSS",
      "Pinia",
      "axios",
    ],
    description:
      "An e-learning platform designed to help developers prepare for certifications in modern tech tools like Symfony, Sylius, Docker, and AWS.",
    role: "As a front-end developer, I contributed to building the user interface, integrating APIs, and ensuring a smooth experience across learning paths, quizzes, and dashboards.",
    keyFeatures: [
      "Personalized certification programs with curated resources.",
      "Daily quizzes to test and reinforce knowledge.",
      "Progress tracking with feedback and improvement suggestions.",
    ],
    carousselPictures: [
      { id: 0, path: "/images/e-learning-app/1.png" },
      { id: 1, path: "/images/e-learning-app/2.png" },
      { id: 2, path: "/images/e-learning-app/3.png" },
      { id: 3, path: "/images/e-learning-app/4.png" },
    ],
  },
];
