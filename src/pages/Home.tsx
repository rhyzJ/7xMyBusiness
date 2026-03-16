import PageContentWrapper from "../layouts/PageContentWrapper";
import ContentSection from "../components/ui/ContentSection";
import type { ContentSectionProps } from "../components/ui/ContentSection";
import HeroBanner from "../components/ui/HeroBanner";
import { useOutletContext, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const { openSignUp } = useOutletContext<{ openSignUp: () => void }>();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openSignUp) {
      openSignUp();
      window.history.replaceState({}, document.title);
    }
  }, [location.state, openSignUp]);

  const sections: ContentSectionProps[] = [
    {
      title: "Be the Generalist",
      description: `Generalist mindset for business owners - shareholder thinking, goals, planning, systems. Intentional 1% improvements drive long-term growth.`,
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=ne2MTFLlXDs",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ne2MTFLlXDs?si=nfoMbaktCtbtisap"
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
    {
      title: "Pain, Solution, Result",
      description:
        "Learn the core communication framework: pain, solution, result. A simple, powerful method for marketing, selling, and explaining ideas.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=AhMpvNXmvFc",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/AhMpvNXmvFc?si=BhprQvGhEdB9Kd15"
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
    {
      title: "7x Your Money",
      description:
        "Let's talk about making more money, increasing your prices and why we never discount",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=mDK2wW5hkN8",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/mDK2wW5hkN8?si=WI3zqhEZxoLeFbFB"
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
    {
      title: "7x Your Sales",
      description:
        "Learn solution-based selling, the two sales paths (instant pain relief vs. most businesses), the 7 trust-building steps, and how storytelling creates urgency so you sell solutions, not products.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=zXslQyXh8vE",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/zXslQyXh8vE?si=Y5zXfA8NL7enyTW"
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
    {
      title: "7x Your Team",
      description:
        "Building a winning team: discover the four key employee needs and how owners can create a culture of clarity, resources, and recognition. Empower your team, empower your business.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=aJix99BgpKE",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aJix99BgpKE?si=swAMdQu5W8HzfezO"
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
    // new video
    {
      title: "Reverse Engineer Your Profit Goal",
      description:
        "A fun tool to reverse engineer your profit goal to create a clear, actionable plan.",
      buttonText: "Watch Now",
      buttonLink: "https://www.youtube.com/watch?v=hfEWU9WLWzs",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/hfEWU9WLWzs?si=chNXIv7c-zaMk9z9"
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
  ];

  return (
    <>
      <HeroBanner ctaText="Join the 7x community" ctaOnClick={openSignUp} />

      <PageContentWrapper>
        <div className="relative max-w-4xl mx-auto text-center mt-15 px-4">
          <p className="text-slate-500 sm:text-lg md:text-xl mb-6 animate-fade-in-up italic">
            Most business owners feel stuck trying to grow without a clear
            written plan.
          </p>

          <h2 className="text-slate-800 sm:text-3xl md:text-4xl animate-fade-in-up-delayed">
            At <span className="text-[#27A65D]">7xyourbusiness.com</span>, we give
            you simple tools and knowledge to create clarity and a written
            strategic plan, so you can make a lot more{" "}
            <span className="text-[#27A65D]">money</span> and achieve the{" "}
            <span className="text-[#27A65D]">results</span> you've always
            wanted.
          </h2>

          <div className="mt-15 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#27A65D] to-transparent opacity-60" />
        </div>

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
