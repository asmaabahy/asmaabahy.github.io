import { FormEvent, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Modal } from "../UI";
import { AnimatePresence } from "motion/react";

function ContactForm() {
  const [status, setStatus] = useState<
    "loading" | "error" | "idle" | "success"
  >("idle");

  async function handleSubmit(event: FormEvent) {
    setStatus("loading");
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    console.log(Object.fromEntries(formData));

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz3Cjsmos-rfAqkmhzD0b9e9t-v2FdqXsqEUUDjQUJw9vGFWoOJk71qpuTjDMsHnX-dLA/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      setStatus("error");
    }

    setStatus("success");
  }

  return (
    <div className="opacity-0 rounded-lg animate-fade-in-delay-1">
      <form
        onSubmit={handleSubmit}
        autoComplete="new-password"
        className="flex flex-col gap-3 justify-center items-center p-8"
      >
        <div>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter e-mail"
            required
          />
        </div>
        <div>
          <Input
            type="textarea"
            name="message"
            placeholder="Your Message goes here ..."
            required
          />
        </div>

        <div>
          <Button
            whileHover={{ scale: 1.1 }}
            className="px-5 py-1 text-lg rounded-md bg-primary text-primary-foreground font-semibold tracking-widest"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {status === "success" && (
          <Modal>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
              <div className="bg-background text-foreground border border-border rounded-2xl shadow-xl p-6 w-full max-w-sm text-center animate-fade-in">
                <div className="text-primary text-4xl mb-2">✓</div>
                <h2 className="text-lg font-semibold mb-1">Thank you!</h2>
                <p className="text-sm ">Got it! I’ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 cursor-pointer px-4 py-2 text-sm bg-primary text-white rounded hover:scale-110 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
