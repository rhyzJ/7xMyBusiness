import CTA from "../buttons/CTA";

interface HeroBannerProps {
  title: string;
  ctaText: string;
  ctaOnClick: () => void; //will open modal
}

function HeroBanner({ title, ctaText, ctaOnClick }: HeroBannerProps) {
  return (
    <div className="bg-[#2C3E50] py-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-white tracking-wide">
        {title}
      </h1>
      <p className="text-sm px-4 text-[#D9D9D9] mb-8 sm:text-md text-center">
        Clarity, Strategy, Results — Rule #3 Twice the result, half the time.
      </p>
      <CTA onClick={ctaOnClick} className="mx-auto">
        {ctaText}
      </CTA>
    </div>
  );
}

export default HeroBanner;
