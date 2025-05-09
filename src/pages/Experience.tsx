import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { EXPERIENCE } from "../constants/constants";
import { Experience as ExperienceInterface, Tabs } from "../constants/interfaces";
import SwitchTab from "../components/UI/SwitchTab";
import Projects from "./Projects";
import Skills from "./Skills";
import ExperienceDetailsCard from "../components/UI/ExperienceDetailsCard";



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const links: Tabs[] = [
  { id: "skills", label: "Skills", component: <Skills /> },
  {
    id: "projects",
    label: "Projects",
    component: <Projects />,
  },
];

function Experience() {
  const [currentTab, setCurrentTab] = useState("skills");
  function handleNavigation(id: string) {
    setCurrentTab(id);
  }

  const content = useMemo(
    () => links.find((element) => element.id === currentTab),
    [currentTab]
  );

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 w-[90%] md:w-[70%] gap-3 mb-10"
      >
        {EXPERIENCE.map((experience: ExperienceInterface) => (
          <ExperienceDetailsCard key={experience.id} experience={experience} />
        ))}
      </motion.div>
      <SwitchTab
        tabs={links}
        onSwitch={handleNavigation}
        currentTab={currentTab}
      />
      {content?.component}
    </>
  );
}

export default Experience;
