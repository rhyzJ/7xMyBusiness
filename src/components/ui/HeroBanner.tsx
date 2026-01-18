import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CTA from "../buttons/CTA";

interface HeroBannerProps {
  ctaText: string;
  ctaOnClick: () => void;
}

function HeroBanner({ ctaText, ctaOnClick }: HeroBannerProps) {
  const navigate = useNavigate();
  const words = ["Money", "Time", "Team"];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] text-white overflow-hidden">
      {/* Subtle diagonal sheen instead of pulsing blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-[#27A65D] via-transparent to-transparent rotate-12" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#27A65D] via-transparent to-transparent -rotate-6" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Title with fade-in */}
        <h1 className="mb-6 tracking-tight animate-fade-in-up">
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-colors duration-300 ${
                index === activeWordIndex ? "text-[#27A65D]" : "text-white"
              }`}
            >
              {word}
              {index < words.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Accent line */}
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#27A65D] to-transparent mb-6 animate-fade-in" />

        {/* Subtitle with stagger */}
        <p className="sm:text-lg md:text-xl text-[#E8E8E8] mb-10 max-w-2xl animate-fade-in-up-delayed">
          Clarity, Alignment, Written Plan, Results — Rule #3: Twice the result,
          half the time.
        </p>

        {/* CTA with animation */}
        <div className="animate-fade-in-up-delayed-2 my-5">
          <CTA
            onClick={ctaOnClick}
            className="mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {ctaText}
          </CTA>
        </div>
        <div className="animate-fade-in-up-delayed-2">
          {/* onclick should open contact page */}
          <CTA
            onClick={() => {
              navigate("/contact");
            }}
            className="mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            Chat with Penny
          </CTA>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .animate-fade-in-up-delayed-2 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.15s forwards;
        }
      `}</style>
    </section>
  );
}

export default HeroBanner;
