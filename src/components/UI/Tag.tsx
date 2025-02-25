import { TagProps } from "../../constants/interfaces"

export default function Tag({skill}: TagProps) {
    return <div className="bg-yellow w-fit px-2 py-1 rounded-full font-semibold border-2 text-sm">{skill}</div>;
}