import SectionFrame from "../components/UI/SectionFrame";
import Title from "../components/Title";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

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
      <SectionFrame title="Skills">
        <Skills />
      </SectionFrame>
    </>
  );
}
