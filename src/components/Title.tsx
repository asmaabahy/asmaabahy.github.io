import Button from "./UI/Button";

export default function Title() {
  function handleClick() {}
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl xs:text-6xl xl:text-8xl mb-5 font-bold font-sans text-white text-center tracking-tight">
          Asmaa Bahy
        </h1>
        <p className="text-3xl xs:text-4xl xl:text-6xl mb-10 text-white tracking-widest text-center">
          Frontend Engineer
        </p>
        <div className="">
          <Button
            className="tracking-widest text-nowrap font-semibold bg-neutral-50 text-neutral-900"
            onClick={handleClick}
          >
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}
