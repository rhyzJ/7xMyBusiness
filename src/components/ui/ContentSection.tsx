import CTASecondary from "../buttons/CTASecondary";

export interface ContentSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonLink?: string;
  video?: React.ReactNode;
  reverse?: boolean;
  variant?: "light" | "dark";
  tagline?: string;
}

export default function ContentSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  buttonLink,
  video,
  reverse = false,
  variant,
  tagline,
}: ContentSectionProps) {
  const isDark = variant === "dark";

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
      <div
        className={`
          relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6
          rounded-2xl overflow-hidden
          shadow-xl
          ${reverse ? "md:flex-row-reverse" : ""}
          ${
            isDark
              ? "bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] text-white"
              : "bg-gray-50 text-slate-800"
          }
        `}
      >
        {/* Soft accent only on dark variant */}
        {isDark && (
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-[#27A65D] via-transparent to-transparent rotate-12" />
          </div>
        )}

        <div className="relative w-full md:w-1/2 min-h-[180px] md:min-h-[260px] overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            {video ? (
              <div className="h-full w-full">{video}</div>
            ) : (
              imageSrc && (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              )
            )}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 flex flex-col justify-center">
          <h2
            className={`mb-2 sm:mb-3 ${
              isDark ? "text-white" : "text-slate-700"
            }`}
          >
            {title}
          </h2>

          <p
            className={`mb-4 sm:mb-5 ${
              isDark ? "text-[#E8E8E8]" : "text-slate-600"
            }`}
          >
            {description}
          </p>

          {/* optional bolded tagline */}
          {tagline && (
            <p
              className={`mb-4 sm:mb-5 ${
                isDark ? "text-[#E8E8E8]" : "text-slate-600"
              }`}
            >
              <strong>{tagline}</strong>
            </p>
          )}

          {buttonText && (
            <CTASecondary
              className="inline-flex"
              variant={isDark ? "dark" : "light"}
              onClick={() => window.open(buttonLink, "_blank")}
            >
              {buttonText}
            </CTASecondary>
          )}
        </div>
      </div>
    </section>
  );
}
