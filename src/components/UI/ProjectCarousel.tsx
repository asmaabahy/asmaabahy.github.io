import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";



function ProjectCarousel({
  folderLink,
}: {
  folderLink: { id: number; path: string }[];
}) {
  const [currenctSlide, setCurrentSlide] = useState(0);


  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? folderLink.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentSlide((prev) => (prev === folderLink.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="flex flex-col items-end justify-center gap-3">
      <div className="relative w-full h-auto md:h-90 md:w-auto rounded-xl overflow-hidden shadow-sm flex flex-row justify-center items-center">
        <AnimatePresence mode="sync">
          {folderLink.map(
            (image) =>
              image.id === currenctSlide && (
                <img
                  key={image.id}
                  src={image.path}
                  alt="Fudiflex Screenshot"
                  className="w-full h-full object-cover "
                />
              )
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-row items-center gap-3">
        <p>
          Slide {currenctSlide + 1} of {folderLink.length}
        </p>

        <div className="flex flex-row items-end justify-between gap-2 ">
          <button
            className="cursor-pointer hover:text-primary"
            onClick={prevSlide}
          >
            <FaCircleChevronLeft className="h-8 w-8" />
          </button>
          <button
            className="cursor-pointer hover:text-primary"
            onClick={nextSlide}
          >
            <FaCircleChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
