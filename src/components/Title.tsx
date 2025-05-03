import Button from "./UI/Button";

export default function Title() {
  function handleClick() {}
  return (
    <>
      <h1 className="text-5xl xs:text-6xl xl:text-8xl mb-5 font-bold font-sans text-white ">
        Asmaa Bahy
      </h1>

      <p className="text-3xl xs:text-4xl xl:text-6xl mb-10 text-white tracking-widest">
        Frontend Engineer
      </p>
      <div className="block">
        <Button onClick={handleClick}>Download CV</Button>
      </div>
    </>
  );
}
