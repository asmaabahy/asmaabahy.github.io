import { ButtonProps } from "../../constants/interfaces";

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-3 py-2 3xl:p-5 rounded-xl font-semibold tracking-wide cursor-pointer disabled:cursor-wait ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
