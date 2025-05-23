import { FormEvent } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

function ContactForm() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <div className="bg-neutral-50/10 rounded-lg">
      <form
        onSubmit={handleSubmit}
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
            className="border px-6 py-2 text-lg rounded-full"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
