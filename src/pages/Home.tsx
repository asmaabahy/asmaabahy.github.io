import { useState, useMemo } from "react";
import SwitchTab from "../components/UI/SwitchTab";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import { Tabs } from "../constants/interfaces";

const links: Tabs[] = [
  {
    id: "experience",
    label: "Experience",
    component: <Experience />,
  },
  { id: "skills", label: "Skills", component: <Skills /> },
  {
    id: "projects",
    label: "Projects",
    component: <Projects />,
  },
];
export default function Home() {
  const [currentTab, setCurrentTab] = useState("experience");
  function handleNavigation(id: string) {
    setCurrentTab(id);
  }

  const content = useMemo(
    () => links.find((element) => element.id === currentTab),
    [currentTab]
  );

  return (
    <>
      <section className="h-[100vh] flex flex-col gap-3 justify-start items-center">
        <SwitchTab
          tabs={links}
          onSwitch={handleNavigation}
          currentTab={currentTab}
        />
        {content?.component}
      </section>
    </>
  );
}
