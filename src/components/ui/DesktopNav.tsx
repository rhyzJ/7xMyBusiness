import { NavLink } from "react-router-dom";
import CTA from "../buttons/CTA";

function DesktopNav() {
  const activeClass =
    "text-white border-b-2 font-medium pb-1 border-[#27A65D] text-center transition";
  const inactiveClass =
    "text-white font-light pb-1 border-b-2 border-transparent text-center hover:text-[#27A65D] transition";

  return (
    <nav className="hidden md:flex space-x-9 items-center">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Home
      </NavLink>
      <NavLink
        to="/money"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Money
      </NavLink>
      <NavLink
        to="/time"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Time
      </NavLink>
      <NavLink
        to="/team"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Team
      </NavLink>
      <CTA
        onClick={() => alert("clicked!")}
        className="bg-[#27A65D] hover:bg-linear-to-r from-cyan-500 to-blue-500 transition-all rounded-full cursor-pointer font-normal"
      >
        default cta
      </CTA>
    </nav>
  );
}

export default DesktopNav;
