import LandingLayout from "../layouts/LandingLayout";
import LandingSection from "../components/ui/LandingSection";
import HeroBanner from "../components/ui/HeroBanner";

export default function Time() {
  const sections = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Watch Now",
      imageSrc: "/images/video-placeholder.jpg",
      imageAlt: "Video thumbnail",
      reverse: false,
    },
    {
      title: "Lorem ipsum",
      description:
        "Another section with description text and button, plus an image on the right side.",
      buttonText: "Watch Now",
      imageSrc: "/images/office-setup.jpg",
      imageAlt: "Office setup",
      reverse: true,
    },
    {
      title: "Lorem ipsum",
      description:
        "Another section with description text and button, plus an image on the right side.",
      buttonText: "Watch Now",
      imageSrc: "/images/office-setup.jpg",
      imageAlt: "Office setup",
      reverse: false,
    },
    {
      title: "Lorem ipsum",
      description:
        "Another section with description text and button, plus an image on the right side.",
      buttonText: "Watch Now",
      imageSrc: "/images/office-setup.jpg",
      imageAlt: "Office setup",
      reverse: true,
    },
  ];

  function handleJoinCommunity() {
    alert("Joining community... 🎉"); // modal open
  }

  return (
    <>
      <HeroBanner
        title="Time"
        subtitle="Rule #2 - Twice the Results in Half the time."
        ctaText="Join the Community"
        ctaOnClick={handleJoinCommunity}
      />
      <LandingLayout>
        {sections.map((section, i) => (
          <LandingSection key={i} {...section} />
        ))}
      </LandingLayout>
    </>
  );
}
