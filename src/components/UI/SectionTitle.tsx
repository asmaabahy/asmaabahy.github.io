import { SectionTitleProps } from "../../constants/interfaces";

export default function SectionTitle({ label, className = '' }: SectionTitleProps) {
  return (
    <h1
      className={`font-bold text-2xl mb-7 ${className}`}
    >
      {label}
    </h1>
  );
}
