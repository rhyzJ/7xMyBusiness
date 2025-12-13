import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false); // logical open/closed
  const [shouldRender, setShouldRender] = useState(false); // keeps panel in DOM for exit anim

  // ESC to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Mount/unmount with animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else if (shouldRender) {
      const timeout = setTimeout(() => setShouldRender(false), 300); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen, shouldRender]);

  interface NavLinkItem {
    name: string;
    url: string;
  }

  const links: NavLinkItem[] = [
    { name: "Join the 7x community", url: "/team" },
    { name: "Book a chat with Penny", url: "/contactUs" },
    { name: "Contact us", url: "/contactUs" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger in header */}
      <div className="z-[60] absolute right-5">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={30}
          direction="left"
          duration={0.3}
          distance="sm"
          rounded
          label="Toggle menu"
          color="#ffffff"
          easing="ease-in"
        />
      </div>

      {shouldRender && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${
              isOpen ? "animate-fade-in" : "animate-fade-out"
            }`}
            onClick={closeMenu}
          />

          {/* Sliding panel */}
          <div
            className={`fixed top-0 right-0 h-screen w-[80vw] sm:w-[65vw] md:w-[40vw] lg:w-[30vw] bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] z-50 shadow-2xl overflow-hidden ${
              isOpen ? "animate-slide-in-panel" : "animate-slide-out-panel"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-[#27A65D] via-transparent to-transparent rotate-12" />
            </div>

            <nav className="relative flex flex-col px-4 pt-20 space-y-2">
              {links.map((link, index) => (
                <NavLink
                  key={link.url}
                  to={link.url}
                  end
                  className={({ isActive }) =>
                    `w-full px-6 py-4 rounded-lg text-base font-medium text-white transition-all duration-200 menu-item-anim ${
                      isActive
                        ? "bg-[#27A65D] shadow-lg"
                        : "bg-white/5 hover:bg-[#27A65D]/80 hover:shadow-md"
                    }`
                  }
                  style={{ animationDelay: `${index * 80}ms` }}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-15 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#27A65D] to-transparent opacity-60" />
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        @keyframes slideInPanel {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }

        @keyframes slideOutPanel {
          from { transform: translateX(0); }
          to   { transform: translateX(100%); }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.25s ease-in forwards;
        }

        .animate-slide-in-panel {
          animation: slideInPanel 0.3s ease-out forwards;
        }

        .animate-slide-out-panel {
          animation: slideOutPanel 0.3s ease-in forwards;
        }

        .menu-item-anim {
          opacity: 0;
          animation: fadeSlideIn 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default MobileNav;
