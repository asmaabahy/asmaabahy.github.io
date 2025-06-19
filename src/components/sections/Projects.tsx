import { AnimatePresence } from "motion/react";
import { ProjectDetailsInterface } from "../../constants/interfaces";
import ProjectCard from "../UI/ProjectCard";

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
    <section className="py-24 px-4 relative select-none ">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured <span className="text-primary">Projects</span>
      </h1>
      <div className="grid md:grid-cols-3 justify-center gap-4 p-3 mx-auto max-w-6xl">
        {projectsList.map((project) => {
          return <ProjectCard key={project.name} projectDetails={project} />;
        })}
      </div>

      <AnimatePresence>
        {/* isCreatingNewChallenge && <NewChallenge onDone={handleDone} /> */}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
