import { useRef } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";

export default function ContactForm() {
    const contactForm = useRef(null);
    
      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (contactForm.current) {
          const form = new FormData(contactForm.current);
          const data = Object.fromEntries(form.entries());

          return data
        }
      }
      
  return (
    <form onSubmit={handleSubmit} ref={contactForm}>
      <div className="grid grid-rows-6 md:grid-rows-5 grid-cols-1 md:grid-cols-2 gap-3 mb-3 ">
        <Input
          id="fullname"
          label="Full Name"
          type="text"
          name="fullname"
          required
          className="md:col-span-1"
        />
        <Input
          id="email"
          label="E-mail Address"
          type="email"
          name="email"
          required
          className="md:col-span-1"
        />
        <Input
          id="emailObject"
          label="E-mail Object"
          type="text"
          name="emailObject"
          required
          className="md:col-span-2"
        />
        <TextArea
          id="message"
          label="Message"
          name="message"
          required
          className="row-span-2 md:col-span-2"
        />
      </div>
      <div className="flex flex-row gap-5 justify-end">
        <Button type="reset" className="bg-neon-blue text-white">
          Reset
        </Button>
        <Button type="submit" className="bg-yellow border-2 ">
          Submit
        </Button>
      </div>
    </form>
  );
}
