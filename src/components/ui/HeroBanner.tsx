import CTA from "../buttons/CTA";

interface HeroBannerProps {
  title: string;
  ctaText: string;
  ctaOnClick: () => void; // will open modal
}

function HeroBanner({ title, ctaText, ctaOnClick }: HeroBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] text-white overflow-hidden">
      {/* Subtle diagonal sheen instead of pulsing blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-[#27A65D] via-transparent to-transparent rotate-12" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#27A65D] via-transparent to-transparent -rotate-6" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Title with fade-in */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up">
          {title}
        </h1>

        {/* Accent line */}
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#27A65D] to-transparent mb-6 animate-fade-in" />

        {/* Subtitle with stagger */}
        <p className="text-base sm:text-lg md:text-xl text-[#E8E8E8] mb-10 max-w-2xl leading-relaxed animate-fade-in-up-delayed">
          Clarity, Strategy, Results — Rule #3: Twice the result, half the time.
        </p>

        {/* CTA with animation */}
        <div className="animate-fade-in-up-delayed-2">
          <CTA
            onClick={ctaOnClick}
            className="mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {ctaText}
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
