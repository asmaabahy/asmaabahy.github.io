import Experience from "./Experience";
import Title from "../components/Title";
import SectionFrame from "../components/UI/SectionFrame";
import About from "./About";

export default function Home() {
  return (
    <>
      <SectionFrame>
        <Title />
      </SectionFrame>
      <SectionFrame title="About Me">
        <About />
      </SectionFrame>
      <SectionFrame title="Experience">
        <Experience />
      </SectionFrame>
    </>
  );
}
