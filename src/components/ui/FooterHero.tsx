import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useEffect } from "react";
import CTA from "../buttons/CTA";

function FooterHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nzImages = useMemo(
    () => [
      {
        image: "src/assets/images/nzImages/landscape1.jpg",
        location: "landscape1",
      },
      {
        image: "src/assets/images/nzImages/landscape2.jpg",
        location: "Lake Taupō, nz",
      },
    ],
    []
  );

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nzImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [nzImages.length]);
  return (
    <section
      className="relative bg-cover bg-center py-16 mt-10 text-white flex flex-col items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${nzImages[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Want more?
          <br />
          Join for free to unlock all resources
        </h2>
        <CTA
          onClick={() => alert("clicked!")}
          className="bg-[#27A65D]  transition rounded-full px-8 cursor-pointer py-3 font-semibold mt-4"
        >
          default cta
        </CTA>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10">
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "white" }} />
        <span className="text-sm font-medium rounded-full py-1">
          {nzImages[currentIndex].location}
        </span>
      </div>
    </section>
  );
}

export default FooterHero;
