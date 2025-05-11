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
            whileHover={{ backgroundColor: "#fafafa", color: "#171717" }}
            className="tracking-widest text-nowrap font-semibold bg-neutral-900 text-neutral-50 px-6 py-3 text-xl rounded-full border"
            onClick={handleClick}
          >
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}
