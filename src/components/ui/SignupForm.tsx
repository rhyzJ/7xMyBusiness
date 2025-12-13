import { useEffect } from "react";

export default function SignUpForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-ap1.hsforms.net/forms/embed/442485932.js";
    script.defer = true;
    document.body.appendChild(script);

    // cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="ap1"
      data-form-id="f60c868c-3a17-4655-beca-68ff677884a3"
      data-portal-id="442485932"
    ></div>
  );
}


