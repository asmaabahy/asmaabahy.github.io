import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 h-16 md:h-20 lg:h-20 3xl:h-32">
        <Navbar />
      </header>
      <main className="text-pink-100">
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  );
}
