import Button from "./UI/Button";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import SectionTitle from "./UI/SectionTitle";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-[50vh] flex flex-col bg-marian-blue items-center"
    >
      <SectionTitle
        label="About me"
        className="text-white self-start bg-neon-blue px-3 py-2"
      />

      <div className="h-full p-5 grow flex flex-col justify-evenly items-center text-white">
        <p className="text-xl font-semibold text-pretty p-3 md:max-w-[70%] text-justify">
          <span className="block mb-3">
            I graduated in October 2023 with a degree in Software Engineering
            and Im all in on front-end development. So far, I've got a year of
            experience under my belt, mostly working with Nuxt.js, React.js,
            Tailwind CSS, and Bootstrap.
          </span>
          <span className="block mb-3">
            Im really into responsive design, making websites faster
            (performance optimization), and implementing designs that work for
            everyone, including people with disabilities (a11y).
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Button className="bg-yellow border-2 text-black">
            <a
              href="https://www.linkedin.com/in/asmaabahy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row flex-shrink-0 items-center justify-center  "
            >
              <FaLinkedin className="mr-3 min-w-5 min-h-5" /> Let's connect!
            </a>
          </Button>
          <Button className="bg-lavender text-black border-2 border-lavender">
            <a
              href="/path-to-your-file.pdf"
              download="custom-file-name.pdf"
              className="flex flex-row flex-shrink-0 items-center justify-center "
            >
              <FaDownload className="mr-3 min-w-5 min-h-5" /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
