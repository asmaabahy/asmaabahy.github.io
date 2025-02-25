import SectionTitle from "./UI/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-[30vh] bg-neon-blue p-5 flex flex-col justify-center items-center"
    >
      <SectionTitle label="Contact" className="text-black bg-yellow" />
    </section>
  );
}
