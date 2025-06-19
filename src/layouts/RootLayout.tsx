import { Outlet } from "react-router";
import { Footer, StarBackground } from "../components/UI";
import { Navbar } from "../components/UI";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">      

      {/** Background Effects */}
      <StarBackground />

      {/** Navbar */}
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
