import { InputProps } from "../../constants/interfaces";

export default function Input({ label, id, name, className='', ...props }: InputProps) {
  return (
    <div className={`text-black ${className}`}>
      <label htmlFor={id} className="block font-semibold">{label}</label>
      <input
        id={id}
        name={name}
        {...props}
        className="block border-b-2 px-2 py-1 focus:outline-0 w-full"
      />
    </div>
  );
}
