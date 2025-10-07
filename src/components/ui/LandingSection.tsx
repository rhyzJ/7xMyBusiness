import CTASecondary from "../buttons/CTASecondary";

// flexible enough to handle either an image or video
// reverse optional allows layout flipping for visual variety, as per design
interface LandingSectionProps {
  title: string;
  description: string;
  buttonText1: string;
  buttonText2: string;
  imageSrc?: string;
  imageAlt?: string;
  video?: React.ReactNode;
  reverse?: boolean;
}

export default function LandingSection({
  title,
  description,
  buttonText1,
  buttonText2,
  imageSrc,
  imageAlt,
  video,
  reverse = false, //always start false
}: LandingSectionProps) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-6 p-6 mt-10 rounded-lg shadow-lg bg-gray-100
      ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* logic for image vs video, check for video, else apply img and styling */}
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
        <div className="flex flex-col items-center justify-start gap-3">
          <CTASecondary className="w-auto md:w-auto">
            {buttonText1}
          </CTASecondary>
          {buttonText2 ? (
            <CTASecondary className="w-full md:w-auto">
              {buttonText2}
            </CTASecondary>
          ) : null}
        </div>
      </div>
    </section>
  );
}
