import ButtonsGroup from "./ButtonsGroup";

export default function Title() {
  return (
    <header className="min-h-[30vh] bg-black flex flex-col justify-around items-center p-10 ">
      <div className="flex flex-col justify-center items-center text-white font-bold text-nowrap">
        <h1 className="uppercase text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-8xl xs:mb-3">
          Asmaa Bahy
        </h1>
        <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 3xl:text-6xl typewriter flex mb-5 xl:mb-10">
          <span className="animate-typing font-monospace overflow-hidden whitespace-nowrap border-r-2">
            junior frontend engineer
          </span>
        </div>
        
      </div>
      <ButtonsGroup />
    </header>
  );
}
