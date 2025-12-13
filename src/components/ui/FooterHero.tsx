import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import CTA from "../buttons/CTA";

interface ImageSlide {
  image: string;
  location: string;
}

interface FooterHeroProps {
  openSignUp: () => void;
}

function FooterHero({ openSignUp }: FooterHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nzImages: ImageSlide[] = [
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
  ];

  // image slider - change every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nzImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [nzImages.length]);
  return (
    <section
      className="relative bg-cover bg-center py-12 sm:py-16 mt-10 text-white flex flex-col items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${nzImages[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-full sm:max-w-4xl text-center px-4">
        <h2
          className="sm:text-3xl mb-4"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Keen to learn more?
        </h2>
        <CTA
          onClick={openSignUp}
          className="mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          Join the 7x community
        </CTA>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10 text-xs sm:text-sm">
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "white" }} />
        <span className="font-medium text-white text-shadow-gray-950/50 text-shadow-lg">
          {nzImages[currentIndex].location}
        </span>
      </div>
    </section>
  );
}

export default FooterHero;
