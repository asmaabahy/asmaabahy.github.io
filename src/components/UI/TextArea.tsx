import { TextAreaProps } from "../../constants/interfaces";

export default function Input({ label, id, name, className = "", ...props }: TextAreaProps) {
  return (
    <div className={`text-black ${className}`}>
      <label htmlFor={id} className="block font-semibold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        {...props}
        className="block border-2 px-2 py-1 focus:outline-0 w-full h-full resize-none"
      />
    </div>
  );
}
