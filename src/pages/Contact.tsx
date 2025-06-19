import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "motion/react";
import { ContactForm } from "../components";

export default function Contact() {
  const icons = [
    {
      href: "https://github.com/yourusername",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/yourprofile",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "mailto:you@example.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="opacity-0 text-2xl xs:text-4xl xl:text-4xl mb-5 font-semibold tracking-tighter animate-fade-in">
        Say Hello
      </h1>

      <ContactForm />
      <p className="opacity-0 font-semibold text-lg my-4 animate-fade-in-delay-2">
        Or connect with me in here instead:
      </p>

      <div className="opacity-0 flex items-center gap-4 text-neutral-700 dark:text-neutral-200 mb-5 animate-fade-in-delay-3">
        {icons.map(({ href, icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-neutral-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
