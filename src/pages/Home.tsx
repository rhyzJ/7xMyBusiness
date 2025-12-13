import PageContentWrapper from "../layouts/PageContentWrapper";
import LandingSection from "../components/ui/LandingSection";
import HeroBanner from "../components/ui/HeroBanner";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  // Get the function passed from the parent Layout via Outlet context,
  const { openSignUp } = useOutletContext<{ openSignUp: () => void }>();
  const sections = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Watch Now",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7crmgfCQfk4?si=tGyLR0yReY2nOGFK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: false,
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Watch Now",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ax_WzL9QkgA?si=6zAqoiXDWQk5DtAd"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: true,
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Watch Now",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tkRh7GHYYKI?si=ELbXL0L1FAY8kU7L"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: false,
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Watch Now",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/mBQx8_HQd94?si=f2xwgLdsnWd9ZtUS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
      reverse: true,
    },
  ];

  return (
    <>
      {/* blue top banner */}
      <HeroBanner
        title="Money Time Team"
        ctaText="Join the Community"
        ctaOnClick={openSignUp}
      />
      <PageContentWrapper>
        {/* section subheading */}
        <h3 className="text-center text-[#2C3E50] text-lg md:text-xl mx-auto max-w-4xl my-10">
          {/* problem line */}
          <span className="block text-[#2c3e50b6] font-bold mb-2 md:mb-5 text-md md:text-lg">
            Most business owners feel stuck trying to grow without a clear plan.
          </span>
          {/* solution line */}
          <span className="block text-2xl font-normal">
            At
            <span className="text-[#27A65D] font-black"> 7xmybusiness</span>, we
            give you simple tools and strategies to create
            <span className="font-black"> clarity and execution</span>, so you
            can
            <span className="font-black"> scale faster</span> and achieve the
            results you’ve always wanted.
          </span>
        </h3>

        {sections.map((section, i) => (
          <LandingSection key={i} {...section} />
        ))}
      </PageContentWrapper>
    </>
  );
}
