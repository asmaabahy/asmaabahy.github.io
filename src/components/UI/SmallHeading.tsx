import { SmallHeadingProps } from "../../constants/interfaces";

export default function SmallHeading({ children }: SmallHeadingProps) {
  return (
    <h2 className="relative text-xl font-semibold text-pretty before:absolute before:left-0 before:bottom-0 before:inset-5 before:w-full before:block before:bg-[#f72585]">
      <span className="relative text-white font-bold uppercase">
        {children}
      </span>
    </h2>
  );
}
