import { AnimatePresence } from "motion/react";
import { ProjectDetailsInterface } from "../constants/interfaces";
import ProjectCard from "./UI/ProjectCard";

const projectsList: ProjectDetailsInterface[] = [
  {
    image: "/Wallpaper.png",
    name: "SensioCrafts",
    link: "https://www.sensiocrafts.com/",
    technologies: ["nuxt", "flowbite", "tailwind", "axios"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero maiores suscipit at excepturi porro optio labore? Perferendis impedit aliquid fugit",
  },
  {
    image: "/Wallpaper.png",
    name: "Fudiflex",
    link: "sensiocrafts.com",
    technologies: ["nuxt", "flowbite", "tailwind", "axios"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero maiores suscipit at excepturi porro optio labore? Perferendis impedit aliquid fugit",
  },
  {
    image: "/Wallpaper.png",
    name: "Fudiflex2",
    link: "sensiocrafts.com",
    technologies: ["nuxt", "flowbite", "tailwind", "axios"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero maiores suscipit at excepturi porro optio labore? Perferendis impedit aliquid fugit",
  },
];

function Projects() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-3 p-3">
        {projectsList.map((project) => {
          return <ProjectCard key={project.name} projectDetails={project} />;
        })}
      </div>

      <AnimatePresence>
        {/* isCreatingNewChallenge && <NewChallenge onDone={handleDone} /> */}
      </AnimatePresence>
    </>
  );
}

export default Projects;
