import { useTranslation } from "react-i18next";
import LinksButtons from "./UI/LinksButtons";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="min-h-[100vh] flex flex-col bg-black">
      <div className="p-5 self-start">
        <LinksButtons />
      </div>

      <div className="grow w-full flex flex-col items-center justify-center px-5">
        <h1 className="text-white text-xl p-5">{t("contact.heading")}</h1>

        <div className="p-5 w-full md:w-[50vw]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
