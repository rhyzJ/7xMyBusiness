import CTA from "../buttons/CTA";

function DesktopNav() {
  return (
    <nav className="hidden md:flex space-x-9 items-center">
      
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
