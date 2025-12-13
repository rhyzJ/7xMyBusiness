import PageContentWrapper from "../layouts/PageContentWrapper";
import ContentSection from "../components/ui/ContentSection";
import type { ContentSectionProps } from "../components/ui/ContentSection";
import HeroBanner from "../components/ui/HeroBanner";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { openSignUp } = useOutletContext<{ openSignUp: () => void }>();

  const sections: ContentSectionProps[] = [
    //1
    {
      title: "Pain, Solution, Result",
      description:
        "Learn the core communication framework: pain, solution, result. A simple, powerful method for marketing, selling, and explaining ideas.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=fKoug4W0hoQ",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/fKoug4W0hoQ?si=24tQe_gfhCfNNHPE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      ),
      reverse: false,
      variant: "light",
    },
    //2
    {
      title: "Be the Generalist",
      description: `Generalist mindset for business owners - shareholder thinking, goals, planning, systems. Intentional 1% improvements drive long-term growth.`,
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=oS-MIrLV20M",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oS-MIrLV20M?si=2NFkjWhMapNfjYYp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: true,
      variant: "dark",
    },
    //3
    {
      title: "7x My Profit",
      description:
        "Move a business from cash → profit → investment using entrepreneurial accounting. Set profit targets, get clear on your numbers, align plans, execute, and own the outcome.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=7crmgfCQfk4",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7crmgfCQfk4?si=ty1OoxCfudB6UEde"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      ),
      reverse: false,
      variant: "light",
    },
    //4
    {
      title: "7x My Sales",
      description:
        "Learn solution-based selling, the two sales paths (instant pain relief vs. most businesses), the 7 trust-building steps, and how storytelling creates urgency so you sell solutions, not products.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=Ax_WzL9QkgA",
        video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ax_WzL9QkgA?si=YoCBeHob56Ax8fVU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: true,
      variant: "dark",
    },
    //5
    {
      title: "7x My Team",
      description:
        "Building a winning team: discover the four key employee needs and how owners can create a culture of clarity, resources, and recognition. Empower your team, empower your business.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=mBQx8_HQd94",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/mBQx8_HQd94?si=mnKLp1CMBdqliOYh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: false,
      variant: "light",
    },
    //6
    {
      title: "7x My Time",
      description:
        "Time management for owners: discover Daily Value Deliverables (DVDs) - small, consistent actions that compound into significant growth. Focus on what matters, reduce noise, and build leverage to free up your time.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=tkRh7GHYYKI",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tkRh7GHYYKI?si=UWnzeBsBsS8lUkA3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: true,
      variant: "dark",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Money Time Team"
        ctaText="Join the Community"
        ctaOnClick={openSignUp}
      />

      <PageContentWrapper>
        <div className="relative max-w-4xl mx-auto text-center mt-15 px-4">
         

          <p className="text-slate-500 text-base sm:text-lg md:text-xl font-medium mb-6 leading-relaxed animate-fade-in-up italic">
            Most business owners feel stuck trying to grow without a clear
            written plan.
          </p>

          {/* Solution statement */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-slate-800 font-normal leading-relaxed animate-fade-in-up-delayed">
            At{" "}
            <span className="text-[#27A65D] font-semibold">7xmybusiness.com</span>,
            we give you simple tools and knowledge to create{" "}
            <span className="font-semibold text-[#2C3E50]">
              clarity and a written strategic plan
            </span>
            , so you can{" "}
            <span className="font-semibold text-[#2C3E50]">
              make a lot more money
            </span>{" "}
            and achieve the results you've always wanted.
          </h2>

          {/* Bottom accent line */}
          <div className="mt-15 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#27A65D] to-transparent opacity-60" />
        </div>

        {/* Content sections */}
        <div className="space-y-0">
          {sections.map((section, i) => (
            <ContentSection key={i} {...section} />
          ))}
        </div>
      </PageContentWrapper>

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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </>
  );
}
