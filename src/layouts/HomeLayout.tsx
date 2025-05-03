import { Outlet, useLocation, useNavigate } from "react-router";
import SwitchTab from "../components/UI/SwitchTab";

const links = [
  { id: "experience", path: "/experience", label: "Experience" },
  { id: "skills", path: "/skills", label: "Skills" },
  { id: "projects", path: "/projects", label: "Projects" },
];

function HomeLayout() {
  const navigate = useNavigate()
  const location = useLocation();
  const currentTab = location.pathname.replace("/", "") || 'experience';
  function handleNavigation(id: string) {
    if (currentTab !== id) {
      navigate(id);
    }
  }  

  console.log('hello');
  
  return (
    <section className="p-3 flex flex-col justify-center items-center text-center py-10">

      <SwitchTab
        tabs={links}
        onSwitch={handleNavigation}
        currentTab={currentTab}
      />
       <Outlet />
    </section>
  );
}

export default HomeLayout;
