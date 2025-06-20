import { PROJECTS } from "../../constants/constants";
import { ProjectDetailsInterface } from "../../constants/interfaces";
import ProjectCard from "../UI/ProjectCard";

const projectsList: ProjectDetailsInterface[] = PROJECTS;

function Projects() {
  return (
    <>
      <section className="py-24 px-4 relative select-none ">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <div className="grid md:grid-cols-2 justify-center justify-items-center gap-4 p-3 mx-auto max-w-6xl">
          {projectsList.map((project) => {
            return <ProjectCard key={project.name} projectDetails={project} />;
          })}
        </div>
      </section>
      

     
    </>
  );
}

export default Projects;
