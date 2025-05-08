import { Outlet, useLocation, useNavigate } from "react-router";
import SwitchTab from "../components/UI/SwitchTab";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import { useState } from "react";
import ErrorMessage from "../components/UI/ErrorMessage";

const links = [
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

function HomeLayout() {
  const [currentTab, setCurrentTab] = useState("experience");
  function handleNavigation(id: string) {
    setCurrentTab(id);
  }

  return (
    <section className="p-3 flex flex-col justify-center items-center py-10">
      {/* <SwitchTab
        tabs={links}
        onSwitch={handleNavigation}
        currentTab={currentTab}
      /> */}
      <Outlet />
    </section>
  );
}

export default HomeLayout;
