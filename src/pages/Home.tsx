import { Title, About, Experience, Skills, Projects } from "../components";
import { SectionFrame } from "../components/UI";

export default function Home() {
  return (
    <>
      <Title />
      <SectionFrame title="About Me">
        <About />
      </SectionFrame>
      <SectionFrame title="Work Experience">
        <Experience />
      </SectionFrame>
      <SectionFrame title="Frontend Dev Skills">
        <Skills />
      </SectionFrame>
      <SectionFrame title="Projects I Worked On">
        <Projects />
      </SectionFrame>
    </>
  );
}
