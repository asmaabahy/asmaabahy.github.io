import { FC } from "react";
import Button from "./UI/Button";
import { motion } from "motion/react";


const initial = {opacity: 0}
const animate = {opacity: 1, transition: {duration: 1, ease: 'easeIn'}}

const Title: FC = () => {
  function handleClick() {}
  return (
    <motion.div initial={initial} animate={animate} className="flex flex-col justify-center items-center">
      <h1 className="text-5xl xs:text-6xl xl:text-8xl mb-5 font-bold font-sans text-white text-center tracking-tight">
        Asmaa Bahy
      </h1>
      <p className="text-3xl xs:text-4xl xl:text-6xl mb-10 text-white tracking-widest text-center">
        Frontend Engineer
      </p>
      <div className="">
        <Button
          whileHover={{ backgroundColor: "#fafafa", color: "#171717" }}
          className="tracking-widest text-nowrap font-semibold bg-neutral-900 text-neutral-50 px-6 py-3 text-xl rounded-full border"
          onClick={handleClick}
        >
          Download CV
        </Button>
      </div>
    </motion.div>
  );
};

export default Title;
