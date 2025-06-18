export default function About() {
  return (
    <>
      <p className="text-justify md:text-start text-lg md:text-xl px-5 md:px-20 lg:px-40 xl:px-56 mb-5">
        <span className="block mb-5">
          I'm a Junior Software Engineer, interested in Frontend Development, I
          have a year of experience under my belt, mostly working with Nuxt.js,
          React.js, Tailwind CSS, and Bootstrap.
        </span>
        <span className="block mb-5">
          I am really into responsive design, performance optimization, and
          implementing designs that work for everyone, including people with
          disabilities (a11y).
        </span>
      </p>
      <div className="self-start px-5 md:px-20 lg:px-40 xl:px-56">
        <h1 className="text-3xl md:text-3xl mb-4 border-b-2 w-fit border-dashed">
          Education
        </h1>
        <p className="text-xl mb-1">Software Engineering</p>
        <p className="text-lg hover:underline">
          <a href="https://aiac.ma/" target="_blank" rel="noopener noreferrer">
            Mohammed VI International Academy of Civil Aviation (2020 -2023)
          </a>
        </p>
      </div>
    </>
  );
}
