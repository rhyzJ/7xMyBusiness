import { NavLink } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";

// mobileNav = hamburger menu for small screens
// uses react-router-dom NavLink for navigation and hamburger-react for toggle

//to do - add exit using esc (ux)

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // nav links for menu
  interface NavLinkItem {
    name: string;
    url: string;
  }
  const links: NavLinkItem[] = [
    { name: "Home", url: "/" },
    { name: "Money", url: "/money" },
    { name: "Team", url: "/team" },
    { name: "Time", url: "/time" },
  ];

  return (
    <div className="md:hidden relative">
      {/* hamburger library (import) */}
      <div className="hamburger-wrapper">
        <Hamburger
          toggled={isOpen} // current state of menu
          toggle={setIsOpen} // setter to change state
          size={25}
          direction="left"
          duration={0.3}
          distance="sm"
          rounded
          label="Show menu" //accessibility
          color="#ffffff"
          easing="ease-in"
        />

        {/* dropdown menu - render only when open using conditionals*/}
        {isOpen && (
          <nav className="absolute top-full right-0 bg-[#2C3E50] rounded shadow-2xl flex flex-col space-y-2 z-50 items-center justify-center align-middle ">
            {links.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                end
                className={(
                  { isActive }
                ) =>
                  `block px-3 py-2 rounded transition-colors duration-200 w-full ${
                    isActive
                      ? "text-[#27A65D] font-semibold" // active style
                      : "text-white font-normal hover:bg-[#27A65D]" //inactive + hover style
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

export default MobileNav;
