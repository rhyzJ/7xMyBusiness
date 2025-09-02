import PageContentWrapper from "../layouts/PageContentWrapper";
import LandingSection from "../components/ui/LandingSection";
import HeroBanner from "../components/ui/HeroBanner";

export default function Money() {
  const sections = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Watch Now",
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eHJnEHyyN1Y?si=q7NvAU6wSmBg2-M2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eHJnEHyyN1Y?si=q7NvAU6wSmBg2-M2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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

  function handleJoinCommunity() {
    alert("Joining community... 🎉"); // modal will open to get details
  }

  return (
    <>
      <HeroBanner
        title="Money"
        ctaText="Join the Community"
        ctaOnClick={handleJoinCommunity}
      />
      <PageContentWrapper>
        {sections.map((section, i) => (
          <LandingSection key={i} {...section} />
        ))}
      </PageContentWrapper>
    </>
  );
}
