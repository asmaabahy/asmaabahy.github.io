import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Modal from "./UI/Modal";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  
  const [submissionStatus, setSubmissionStatus] = useState({
    isSending: false,
    isSent: false,
    isError: null,
  });

  let SubmitButtonLabel = submissionStatus.isSending
    ? t("contact.form.sending")
    : t("contact.form.send");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formRef = document.getElementById("contact-form") as HTMLFormElement;
    const form = new FormData(formRef);
    setSubmissionStatus({
      isSending: true,
      isSent: false,
      isError: null,
    });

    fetch(
      "https://script.google.com/macros/s/AKfycbxyloaAfNgVRaGD0cGpmL08WPD65m-QzGsoATFZxrJ7FxKdCuxg1qK5Tt3HfDmoFzhXWw/exec",
      {
        method: "POST",
        body: form,
      }
    )
      .then((res) => {
        if (res.ok) {
          setSubmissionStatus({
            isSending: false,
            isSent: true,
            isError: null,
          });
          formRef.reset();
        }
      })
      .catch((err) => {
        setSubmissionStatus({
          isSending: false,
          isSent: true,
          isError: err,
        });
      });
  }

  function handleClosePopup() {
    setSubmissionStatus({
      isSending: false,
      isSent: false,
      isError: null,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="grid grid-rows-6 md:grid-rows-5 grid-cols-1 gap-3 mb-5 ">
          <Input
            id="name"
            placeholder={t("contact.form.name")}
            type="text"
            name="Name"
            required
          />
          <Input
            id="email"
            placeholder={t("contact.form.email")}
            type="email"
            name="Email"
            required
          />
          <TextArea
            id="message"
            placeholder={t("contact.form.message")}
            name="Message"
            required
            className="row-span-3"
          />
        </div>
        <div className="flex flex-row gap-2 justify-end">
          <Button
            type="reset"
            className="bg-gray text-white"
            disabled={submissionStatus.isSending}
          >
            {t("contact.form.reset")}
          </Button>
          <Button
            type="submit"
            className="bg-rose border-2 border-rose font-bold text-white tracking-wider min-w-[8rem]"
            disabled={submissionStatus.isSending}
          >
            {SubmitButtonLabel}
          </Button>
        </div>
      </form>
      <Modal open={submissionStatus.isSent} onClose={handleClosePopup}>
        <div className="bg-plum text-black rounded-4xl flex flex-col items-center justify-around p-5 gap-5">
          <div className="flex flex-col items-center gap-3">
            <p className="block text-2xl font-semibold">
              {t("contact.modal.confirmation")}
            </p>
            <p className="text-center text-pretty font-medium ">
              {t("contact.modal.message")}
            </p>
          </div>
          <Button
            type="button"
            className="bg-rose text-white"
            onClick={handleClosePopup}
          >
            {t("contact.modal.okay")}
          </Button>
        </div>
      </Modal>
    </>
  );
}
