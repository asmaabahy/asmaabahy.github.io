import { ButtonProps } from "../../constants/interfaces";

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-3 py-2 rounded-xl font-semibold tracking-wide ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
