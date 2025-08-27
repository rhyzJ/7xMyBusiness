import CTASecondary from "../buttons/CTASecondary";

interface LandingSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  video?: React.ReactNode;
  reverse?: boolean;
}

export default function LandingSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  video,
  reverse = false,
}: LandingSectionProps) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-6 p-6 mt-10 rounded-lg shadow-lg bg-gray-100
      ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {video
        ? video
        : imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full md:w-1/2 rounded-lg object-cover"
            />
          )}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>
        <CTASecondary className="mx-auto">{buttonText}</CTASecondary>
      </div>
    </section>
  );
}
