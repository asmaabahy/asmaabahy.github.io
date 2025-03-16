import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowUp, FaGlobe } from "react-icons/fa6";
import Button from "./Button";

const className =
  "flex flex-row items-center justify-center gap-2 p-2 text-white bg-neon-blue border-2";

export default function TranslationButton() {
  const { i18n } = useTranslation();
  const [translationButton, setTranslationButton] = useState({
    lang: "fr",
    label: "FR",
  });
  const changeLanguage = () => {
    setTranslationButton((prev) =>
      prev.lang === "en"
        ? { lang: "fr", label: "FR" }
        : { lang: "en", label: "EN" }
    );
    i18n.changeLanguage(translationButton.lang);
  };

  return (
    <div className="fixed flex z-50 bottom-3 right-3 gap-3">
      <Button
        className={className}
        onClick={changeLanguage}
      >
        <FaGlobe /> <span>{translationButton.label}</span>
      </Button>
      <Button className={className}>
        <a href="#header">
          <FaArrowUp />
        </a>
      </Button>
    </div>
  );
}
