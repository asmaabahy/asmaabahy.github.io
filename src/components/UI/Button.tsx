import { ButtonProps } from "../../constants/interfaces";

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-2 py-2 rounded-xl tracking-wide cursor-pointer disabled:cursor-wait ${className}`}
      
      {...props}
    >
      {children}
    </button>
  );
}
