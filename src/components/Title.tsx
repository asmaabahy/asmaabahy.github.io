
import {
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

export default function Title() {
  return (
    <section className="h-[50vh] bg-black ">
      <div className="h-full flex flex-col justify-center items-center text-white font-bold text-nowrap">
        <h1 className="mb-5 text-4xl">Asmaa Bahy</h1>
        <div className="typewriter text-2xl flex mb-5 sm:text-2xl lg:text-3xl xl:text-4xl xl:mb-10 2xl:text-4xl 3xl:text-5xl">
          <span className="animate-typing font-monospace overflow-hidden whitespace-nowrap border-r-2">
            SWE - Frontend Developer
          </span>
        </div>
        <div className="flex flex-row justify-around md:justify-start">
          <FaHtml5 className="mr-2 min-h-7 min-w-7 2xl:w-10 2xl:h-10 2xl:mr-4" />
          <FaCss3Alt className="mr-2 min-h-7 min-w-7 2xl:w-10 2xl:h-10 2xl:mr-4" />
          <FaJsSquare className="mr-2 min-h-7 min-w-7 2xl:w-10 2xl:h-10 2xl:mr-4" />
          <FaReact className="mr-2 min-h-7 min-w-7 animate-spin-slow 2xl:w-10 2xl:h-10 2xl:mr-4" />
          <FaVuejs className="min-h-7 min-w-7 2xl:w-10 2xl:h-10 2xl:mr-4" />
        </div>
      </div>
    </section>
  );
}
