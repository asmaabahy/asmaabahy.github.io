
import {
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import ButtonsGroup from "./ButtonsGroup";

const iconsStyle =
  "mr-2 min-h-7 min-w-7 text-xl xs:text-2xl sm:text-3xl 3xl:text-6xl 2xl:mr-4";
export default function Title() {

  return (
    <header className="min-h-[50vh] bg-[#11151C] flex flex-col justify-evenly items-center ">
      <div className="flex flex-col justify-center items-center text-white font-bold text-nowrap">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-8xl mb-5">
          Asmaa Bahy
        </h1>
        <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 3xl:text-6xl typewriter flex mb-5 xl:mb-10">
          <span className="animate-typing font-monospace overflow-hidden whitespace-nowrap border-r-2">
            Junior Frontend Engineer
          </span>
        </div>
        <div className="flex flex-row justify-around md:justify-start">
          <FaHtml5 className={iconsStyle} />
          <FaCss3Alt className={iconsStyle} />
          <FaJsSquare className={iconsStyle} />
          <FaReact className={iconsStyle + " animate-spin-slow"} />
          <FaVuejs className={iconsStyle} />
        </div>
      </div>

      <ButtonsGroup />
    </header>
  );
}
