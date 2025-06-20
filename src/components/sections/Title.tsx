import { FC } from "react";

const Title: FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 select-none"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Asmaa{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Bahy{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="opacity-0 mx-auto w-fit animate-fade-in-delay-4 bg-primary/10 px-6 py-1 text-lg rounded-full border ">
            <a
              href="/cv.pdf"
              target="_blank"
              className="tracking-widest text-nowrap font-semibold "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <img
          src={"/scrollDown.gif"}
          alt={"Scroll Down"}
          className="h-12 w-12 text-primary"
        />
      </div>
    </section>
  );
};

export default Title;
