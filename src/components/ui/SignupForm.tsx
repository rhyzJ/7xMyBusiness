import { useEffect } from "react";

interface HubSpotFormCreateOptions {
  region: string;
  portalId: string;
  formId: string;
  target: string;
}

interface HubSpotEmbed {
  forms: {
    create: (options: HubSpotFormCreateOptions) => void;
  };
}

declare global {
  interface Window {
    hbspt?: HubSpotEmbed;
  }
}

export default function SignUpForm() {
  useEffect(() => {
    const createForm = () => {
      const hbspt = window.hbspt;
      if (!hbspt) return;

      const formContainer = document.getElementById("hubspot-form");

      if (formContainer && formContainer.children.length === 0) {
        hbspt.forms.create({
          region: "ap1",
          portalId: "442485932",
          formId: "f60c868c-3a17-4655-beca-68ff677884a3",
          target: "#hubspot-form",
        });
      }
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js-ap1.hsforms.net/forms/embed/v2.js";
    script.async = true;

    script.onload = () => {
      createForm();
    };

    document.body.appendChild(script);

    return () => {
      const formContainer = document.getElementById("hubspot-form");

      if (formContainer) {
        formContainer.innerHTML = "";
      }
    };
  }, []);

  return <div id="hubspot-form"></div>;
}
