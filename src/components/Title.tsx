import Button from "./UI/Button";

export default function Title() {
  function handleClick() {}
  return (
    <>
      <h1 className="text-5xl xs:text-6xl xl:text-8xl mb-5 font-bold font-sans text-white text-center tracking-tight">
        Asmaa Bahy
      </h1>

      <p className="text-3xl xs:text-4xl xl:text-6xl mb-10 text-white tracking-widest text-center">
        Frontend Engineer
      </p>
      <div className="block text-center">
        <Button
          className="tracking-widest font-semibold bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 text-neutral-900"
          onClick={handleClick}
        >
          Download CV
        </Button>
      </div>
    </>
  );
}
