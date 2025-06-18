import { motion } from "motion/react";
import { ProjectDetailsInterface } from "../../constants/interfaces";
import TechnologieTag from "./TechnologieTag";

interface ProjectCardProps {
  projectDetails: ProjectDetailsInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectDetails }) => {
  return (
    <motion.div className="group relative max-w-90">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={projectDetails.image}
              alt={projectDetails.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-3">
            <div className="flex flex-row justify-between mb-2">
              <h1 className="font-bold">{projectDetails.name}</h1>
              <a
                href={projectDetails.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                visit
              </a>
            </div>
            <div className="flex flex-row flex-wrap gap-1 mb-2">
              {projectDetails.technologies.map((technologie) => (
                <TechnologieTag key={technologie} label={technologie} />
              ))}
            </div>
            <p>{projectDetails.description}</p>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
