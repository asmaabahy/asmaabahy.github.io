import { FaCircle, FaXmark } from "react-icons/fa6";
import { Modal, TechnologieTag } from ".";
import ProjectCarousel from "./ProjectCarousel";
import { ProjectDetailsInterface } from "../../constants/interfaces";

interface ProjectCardProps {
  projectDetails: ProjectDetailsInterface;
  onClose: () => void;
}

const ProjectsDetails: React.FC<ProjectCardProps> = ({
  projectDetails,
  onClose,
}) => {
  return (
    <Modal>
      <div className="max-w-4xl w-full mx-auto overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="flex flex-row w-full justify-end cursor-pointer"
        >
          <FaXmark className="h-5 w-5" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground">
          <div className="flex flex-col col-span-2 gap-4">
            <div>
              <h1 className="text-2xl font-semibold  mb-2">
                {projectDetails.name}
              </h1>
              <p className="">{projectDetails.description}</p>
            </div>

            {<ProjectCarousel folderLink={projectDetails.carousselPictures} />}
          </div>

          <div className="flex col-span-1 flex-col gap-6 justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1">My Role</h2>
              <p className="">{projectDetails.role}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
              <ul className="flex flex-wrap gap-2">
                {projectDetails.technologies.map((tech) => (
                  <TechnologieTag label={tech} />
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Key Features</h2>
              <ul className="space-y-1 ">
                {projectDetails.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-baseline gap-2">
                    <FaCircle className="h-2 w-2 shrink-0 text-gray-600 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectsDetails;
