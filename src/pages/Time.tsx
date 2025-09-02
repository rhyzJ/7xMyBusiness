import PageContentWrapper from "../layouts/PageContentWrapper";
import LandingSection from "../components/ui/LandingSection";
import HeroBanner from "../components/ui/HeroBanner";
import { useOutletContext } from "react-router-dom";

export default function Time() {
  const { openSignUp } = useOutletContext<{ openSignUp: () => void }>();

  const sections = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Visit Channel",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9VlvbpXwLJs?si=bi9rUWNCyDudAw9G"
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
      buttonText: "Download",
      imageSrc: "src/assets/images/placeholders/business-placeholder.jpeg",
      imageAlt: "Office setup",
      reverse: true,
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Visit Channel",
      video: (
        <div className="w-full max-w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9VlvbpXwLJs?si=bi9rUWNCyDudAw9G"
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
      buttonText: "Download",
      imageSrc: "src/assets/images/placeholders/business-placeholder.jpeg",
      imageAlt: "Office setup",
      reverse: true,
    },
  ];

  return (
    <>
      <HeroBanner
        title="Time"
        ctaText="Join the Community"
        ctaOnClick={openSignUp}
      />
      <PageContentWrapper>
        {sections.map((section, i) => (
          <LandingSection key={i} {...section} />
        ))}
      </PageContentWrapper>
    </>
  );
}
