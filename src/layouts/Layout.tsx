import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileNav from "../components/ui/MobileNav";
import DefaultFooter from "../components/ui/DefaultFooter";
import FooterHero from "../components/ui/FooterHero";
import SignUpModal from "../components/ui/SignUpModal";
import logo from "../assets/logos/7xlogo-white.png";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto h-20 sm:h-24">
          <img
            src={logo}
            alt="7x Logo"
            className="h-24 w-auto cursor-pointer"
            onClick={() => (window.location.href = "/")}
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

      <FooterHero openSignUp={() => setIsSignUpOpen(true)} />
      <DefaultFooter />
    </div>
  );
}
