import { FaLinkedin, FaRegFaceLaughBeam } from "react-icons/fa6";
import { Link } from "react-router";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative select-none">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="text-lg text-center md:text-xl mb-10">
          <span className="text-2xl font-semibold mb-5 block">
            Software Engineer & Passionate Frontend Developer
          </span>
          <span className="block mb-5">
            With over 2 years of experience in web development, I specialize in
            creating responsive, accessible, and performant web applications
            mostly working with Nuxt.js, React.js, Tailwind CSS, and Bootstrap.
          </span>
          <span className="block mb-5">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </span>
        </p>
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        <a
          href={"https://linkedin.com/in/asmaabahy"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"LinkedIn Profile"}
          className="text-lg w-fit border bg-primary/20 rounded-xl px-3 py-2 flex flex-row flex-nowrap justify-center items-center gap-2 "
        >
          <FaLinkedin />
          Let's Connect
        </a>
        <Link
          to={"contact"}
          aria-label={"Contact page"}
          className="text-lg w-fit border-2 border-border rounded-xl px-3 py-2 flex flex-row flex-nowrap justify-center items-center gap-2 animate-bounce duration-100"
        >
          <FaRegFaceLaughBeam />
          Say Hi
        </Link>
      </div>
      </div>
    </section>
  );
}
