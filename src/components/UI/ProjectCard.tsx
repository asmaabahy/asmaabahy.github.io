import { motion } from "motion/react";
import { ProjectDetailsInterface } from "../../constants/interfaces";
import TechnologieTag from "./TechnologieTag";
import { useState } from "react";
import ProjectsDetails from "./ProjectsDetails";

interface ProjectCardProps {
  projectDetails: ProjectDetailsInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectDetails }) => {
  const [openProject, setOpenProject] = useState(false)

  

  return (
    <>
      <motion.div onClick={() => setOpenProject(true)}  className="group relative w-full h-full">
        <div className="card relative bg-foreground/10 overflow-hidden rounded-xl h-full backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

          <div className="relative z-10 h-full">
            <div className="relative h-64 overflow-hidden rounded-tl-lg rounded-tr-lg">
              <img
                src={projectDetails.image}
                alt={projectDetails.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-3">
              <div className="flex flex-row justify-between mb-2">
                <h1 className="font-bold">{projectDetails.name}</h1>
              </div>
              <div className="flex flex-row flex-wrap gap-1 mb-2">
                {projectDetails.technologies.map((technologie) => (
                  <TechnologieTag key={technologie} label={technologie} />
                ))}
              </div>
              <p>{projectDetails.description}</p>

              <div>details</div>
            </div>

            <div className="absolute h-full inset-0 border border-white/0 group-hover:border-primary/80 rounded-xl transition-colors duration-300 -z-50"></div>
          </div>
        </div>
      </motion.div>

      {openProject && <ProjectsDetails projectDetails={projectDetails} onClose={() => setOpenProject(false)} />}

    </>
  );
};

export default ProjectCard;
