import { SectionTitleProps } from "../../constants/interfaces";

export default function SectionTitle({ label, className = '' }: SectionTitleProps) {
  return (
    <h1
      className={`font-bold text-2xl w-full sticky top-0 z-50 ${className}`}
    >
      {label}
    </h1>
  );
}
