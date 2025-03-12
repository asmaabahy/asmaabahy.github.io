import { TextAreaProps } from "../../constants/interfaces";

export default function Input({ placeholder, id, name, className = "", ...props }: TextAreaProps) {
  return (
    <div className={`text-black ${className}`}>
      <textarea
        id={id}
        name={name}
        {...props}
        className="block text-white font-semibold placeholder:font-light bg-[#364156] placeholder:text-white rounded-2xl px-4 py-2 focus:outline-0 w-full h-full resize-none"
        placeholder={placeholder + "..."}
      />
    </div>
  );
}
