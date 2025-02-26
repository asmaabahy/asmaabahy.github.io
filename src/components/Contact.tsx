import ContactForm from "./ContactForm";
import SectionTitle from "./UI/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[100vh] flex flex-col bg-marian-blue"
    >
      <SectionTitle
        label="Get in touch"
        className="text-white bg-neon-blue px-3 py-2"
      />

      <div className="grow w-full flex flex-col items-center justify-center px-5">
        <h1 className="text-white font-semibold text-xl p-5">
          Feel free to reach out for collaborations, questions, or just to say
          hi. &#128516;
        </h1>

        <div className="w-full h-fit justify-self-center lg:w-[60vw] border-2 rounded-4xl p-5 bg-lavender drop-shadow-[-0.3rem_0.3rem_0rem_black]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
