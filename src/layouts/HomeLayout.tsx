import { Outlet } from "react-router";

function HomeLayout() {

  return (
    <section className="p-3 flex flex-col justify-center items-center text-center py-10">
      <Outlet />
    </section>
  );
}

export default HomeLayout;
