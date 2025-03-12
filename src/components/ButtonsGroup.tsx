import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "./UI/Button";

export default function ButtonsGroup() {
    return (
      <div className="sm:text-lg xl:text-xl flex flex-col-reverse sm:flex-row justify-center items-center gap-3">
        <Button className="bg-[#f72585] text-white border-2 border-[#f72585]">
          <a
            href="/path-to-your-file.pdf"
            download="custom-file-name.pdf"
            className="flex flex-row flex-shrink-0 items-center justify-center "
          >
            <FaDownload className="mr-3 xs:min-w-5 xs:min-h-5" /> Download CV
          </a>
        </Button>
        <div className="flex flex-row gap-3">
          <Button className="bg-plum border-2 border-plum text-black ">
            <a
              href="https://github.com/asmaabahy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </Button>
          <Button className="bg-[#7209b7] border-2 border-[#7209b7] text-white">
            <a
              href="https://www.linkedin.com/in/asmaabahy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </Button>
        </div>
      </div>
    );
}