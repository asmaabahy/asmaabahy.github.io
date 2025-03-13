import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa6";
import Button from "./UI/Button";

export default function ButtonsGroup() {
  return (
    <div className="w-full text-lg xl:text-2xl 3xl:text-5xl flex flex-row justify-center items-center gap-2 3xl:gap-5 p-5">
      <Button
        className="bg-rose text-white border-2 border-rose"
        title="Download my resume"
      >
        <a href="/path-to-your-file.pdf" download="custom-file-name.pdf">
          <FaFile />
        </a>
      </Button>
      <Button className="bg-plum border-2 border-plum text-black " title="Visit my GitHub">
        <a
          href="https://github.com/asmaabahy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </Button>
      <Button className="bg-grape border-2 border-grape text-white" title="Connect with me on LinkedIn">
        <a
          href="https://www.linkedin.com/in/asmaabahy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </Button>
    </div>
  );
}
