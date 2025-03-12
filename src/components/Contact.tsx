import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[100vh] flex flex-col bg-[#11151C]">
      <div className="grow w-full flex flex-col items-center justify-center px-5">
        <h1 className="text-white text-xl p-5">
          Feel free to reach out for collaborations, questions, or just to say
          hi.
        </h1>

        <div className="p-5 w-full md:w-[50vw]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
