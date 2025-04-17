import Button from "./UI/Button";

export default function Title() {
  function handleClick() {}
  return (
    <section className="w-full p-3 flex flex-col items-center text-center py-10">
      <h1 className="text-5xl xs:text-6xl xl:text-8xl mb-10 font-bold poetsen-one-regular text-white [text-shadow:_0_0_5px_#9B5FCA,_0_0_10px_#9B5FCA,_0_0_20px_#8230BA,_0_0_30px_#51107A] tracking-widest">
        Asmaa Bahy
      </h1>

      <p className="text-3xl xs:text-4xl xl:text-6xl mb-10 text-white tracking-widest">
        Frontend Engineer
      </p>
      <div className="block">
        <Button onClick={handleClick}>Download CV</Button>
      </div>
    </section>
  );
}
