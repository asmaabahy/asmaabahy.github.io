import { SmallHeadingProps } from "../../constants/interfaces";

export default function SmallHeading({ children }: SmallHeadingProps) {
  return (
    <h2 className="relative text-xl font-semibold text-pretty before:absolute before:left-0 before:bottom-0 before:inset-4 before:w-full before:block before:bg-rose">
      <span className="relative text-white font-bold uppercase">
        {children}
      </span>
    </h2>
  );
}
