import SectionTitle from "./UI/SectionTitle";

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-[70vh] bg-marian-blue flex flex-col items-center"
    >
      <SectionTitle
        label="Skills"
        className="text-white self-start bg-neon-blue px-3 py-2"
      />
    </section>
  );
}
