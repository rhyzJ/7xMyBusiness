import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileNav from "../components/ui/MobileNav";
import DefaultFooter from "../components/ui/DefaultFooter";
import FooterHero from "../components/ui/FooterHero";
import SignUpModal from "../components/ui/SignUpModal";
import logo from "../assets/logos/7xlogo-white.png";
import logoSmall from "../assets/logos/mobile-logo.png";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#2C3E50]">
      <header
        className={`bg-[#2C3E50] px-4 sm:px-6 lg:px-10 sticky top-0 z-50 transition-shadow duration-300 ease-in-out ${
          isScrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="flex my-3.5 items-center justify-center w-full max-w-7xl mx-auto h-20 sm:h-24 px-4 sm:px-6 lg:px-10">
          <img
            src={logoSmall}
            alt="7x Logo"
            className="h-20 w-auto cursor-pointer sm:hidden"
            onClick={() => navigate("/")}
          />
          <img
            src={logo}
            alt="7x Logo"
            className="h-24 w-auto cursor-pointer hidden sm:block"
            onClick={() => navigate("/")}
          />
          <MobileNav openSignUp={() => setIsSignUpOpen(true)} />
        </div>
      </header>
      <main className="flex-grow w-full mx-auto sm:p-0 bg-gradient-to-br from-[#FFFFFF] via-[#F5F5F5] to-[#FFFFFF]">
        <Outlet context={{ openSignUp: () => setIsSignUpOpen(true) }} />
      </main>

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />

      {isSignUpOpen && (
        <button
          type="button"
          onClick={() => setIsSignUpOpen(false)}
          aria-label="Close signup modal"
          style={{
            position: "fixed",
            top: "16px",
            right: "16px",
            zIndex: 99999,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#ffffff",
            color: "#666666",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            fontSize: "26px",
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}

      <FooterHero openSignUp={() => setIsSignUpOpen(true)} />
      <DefaultFooter />
    </div>
  );
}
