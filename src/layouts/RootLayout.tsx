import { Outlet } from "react-router";
import { StarBackground, ThemeToggle } from "../components/UI";
import { Navbar } from "../components/UI";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/** Theme toggle */}
      <ThemeToggle />

      {/** Background Effects */}
      <StarBackground />

      {/** Navbar */}
      <Navbar />
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}
