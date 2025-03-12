import { SmallHeadingProps } from "../../constants/interfaces";

export default function SmallHeading({ children }: SmallHeadingProps) {
  return (
    <h2 className="relative text-2xl font-semibold text-pretty before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-white">
      <span className="relative text-[#212D40]">{children}</span>
    </h2>
  );
}
