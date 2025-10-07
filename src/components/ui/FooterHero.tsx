import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useEffect } from "react";
import CTA from "../buttons/CTA";

interface ImageSlide {
  image: string;
  location: string;
}

function FooterHero() {
  const [currentIndex, setCurrentIndex] = useState(0); //track current bg img

  const nzImages: ImageSlide[] = useMemo(
    //memoized (trial) to improve performance to reduce recreation on render for scalability for performance optimisation, only on mount
    () => [
      {
        image: "src/assets/images/nzImages/mountCook.jpg",
        location: "Mount Cook, New Zealand",
      },
      {
        image: "src/assets/images/nzImages/lakeTaupo.jpg",
        location: "Lake Taupō, New Zealand",
      },
      {
        image: "src/assets/images/nzImages/lakeMatheson.jpg",
        location: "Lake Mathesons, New Zealand",
      },
    ],
    []
  );

  // image slider - change every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nzImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [nzImages.length]);
  return (
    //full width hero with dynamic image
    <section
      className="relative bg-cover bg-center py-12 sm:py-16 mt-10 text-white flex flex-col items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${nzImages[currentIndex].image})` }}
    >
      {/* overlay tint (readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* hero text + cta button */}
      <div className="relative z-10 max-w-full sm:max-w-4xl text-center px-4">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Want more?
          <br />
          Join for free to unlock all resources
        </h2>

        <CTA
          onClick={() => alert("sign up modal")}
          className="bg-[#27A65D] transition rounded-full px-6 sm:px-8 py-2 sm:py-3 font-semibold mt-4 text-sm sm:text-base"
        >
          default cta
        </CTA>
      </div>

      {/* display current location of image from array*/}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10 text-xs sm:text-sm">
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "white" }} />
        <span className="font-medium">{nzImages[currentIndex].location}</span>
      </div>
    </section>
  );
}

export default FooterHero;
