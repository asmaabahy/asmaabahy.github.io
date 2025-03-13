import { InputProps } from "../../constants/interfaces";

export default function Input({
  placeholder,
  id,
  name,
  className = " ",
  ...props
}: InputProps) {
  return (
    <div className={`text-black ${className}`}>
      <input
        id={id}
        name={name}
        {...props}
        className="block text-white bg-gray-light placeholder:text-white placeholder:font-light rounded-4xl px-4 py-2 focus:outline-0 w-full"
        placeholder={placeholder}
      />
    </div>
  );
}
