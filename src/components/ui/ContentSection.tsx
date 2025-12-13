import CTASecondary from "../buttons/CTASecondary";

type Variant = "light" | "dark";

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  video?: React.ReactNode;
  reverse?: boolean;
  variant?: Variant; // NEW: control styling
}

export default function ContentSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  video,
  reverse = false,
  variant = "light", // default to light
}: ContentSectionProps) {
  const isDark = variant === "dark";

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div
        className={`
          relative flex flex-col md:flex-row items-stretch gap-8
          rounded-2xl overflow-hidden
          shadow-[0_14px_35px_rgba(15,23,42,0.12)]
          border ${isDark ? "border-white/10" : "border-slate-100"}
          ${reverse ? "md:flex-row-reverse" : ""}
          ${
            isDark
              ? "bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] text-white"
              : "bg-gray-100 text-red-700"
          }
        `}
      >
        {/* Soft accent only on dark variant to avoid aggression */}
        {isDark && (
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-[#27A65D] via-transparent to-transparent rotate-12" />
          </div>
        )}

        {/* Media */}
        <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[260px] overflow-hidden">
          <div
            className={`
              h-full w-full overflow-hidden
              ${
                reverse
                  ? "rounded-2xl md:rounded-r-2xl md:rounded-l-none"
                  : "rounded-2xl md:rounded-l-2xl md:rounded-r-none"
              }
            `}
          >
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

        {/* Content */}
        <div className="relative w-full md:w-1/2 px-5 sm:px-8 py-6 sm:py-8 flex flex-col justify-center">
          <h3
            className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-3 ${
              isDark ? "text-white" : "text-slate-700"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed mb-5 ${
              isDark ? "text-[#E8E8E8]" : "text-slate-600"
            }`}
          >
            {description}
          </p>
          <CTASecondary
            className="inline-flex"
            variant={isDark ? "dark" : "light"}
          >
            {buttonText}
          </CTASecondary>{" "}
        </div>
      </div>
    </section>
  );
}
