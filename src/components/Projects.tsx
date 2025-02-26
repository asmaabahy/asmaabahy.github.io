import SectionTitle from "./UI/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-[70vh] bg-marian-blue flex flex-col items-center"
    >
      <SectionTitle
        label="Projects"
        className="text-white self-start bg-neon-blue px-3 py-2"
      />
    </section>
  );
}
