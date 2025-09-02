import CTA from "../buttons/CTA";

interface HeroBannerProps {
  title: string;
  ctaText: string;
  ctaOnClick: () => void;
}

function HeroBanner({ title, ctaText, ctaOnClick }: HeroBannerProps) {
  return (
    <div className="bg-[#2C3E50] py-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-white">{title}</h1>
      <p className="text-md text-[#D9D9D9] mb-8 text-center">
        Clarity, Strategy, Results — For Business Owners Who Want More
      </p>
      <CTA onClick={ctaOnClick} className="mx-auto">
        {ctaText}
      </CTA>
    </div>
  );
}

export default HeroBanner;
