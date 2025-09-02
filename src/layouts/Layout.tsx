import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileNav from "../components/ui/MobileNav";
import DesktopNav from "../components/ui/DesktopNav";
import DefaultFooter from "../components/ui/DefaultFooter";
import FooterHero from "../components/ui/FooterHero";
import SignUpModal from "../components/ui/SignUpModal";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false); //check user scroll for navshadow
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); //check user scroll for navshadow

  //scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //cleanup
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`bg-[#2C3E50] px-3 sm:px-5 sticky top-0 m-0 z-50 transition-shadow duration-300 ease-in-out ${
          isScrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <img
            src="src/assets/logos/7xlogo-white.png"
            alt="7x Logo"
            className="h-12 sm:h-18 w-auto"
          />
          <DesktopNav />
          <MobileNav />
        </div>
      </header>

      <main className="flex-grow w-full mx-auto sm:p-0">
        {/* outlet passes the function down to child routes so they can open the sign-up modal without managing their own state **** new concept */}
        <Outlet context={{ openSignUp: () => setIsSignUpOpen(true) }} />
      </main>

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
      <FooterHero />
      <DefaultFooter />
    </div>
  );
}
