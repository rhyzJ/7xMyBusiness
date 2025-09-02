import { PhoneIcon } from "@heroicons/react/24/outline";

function DefaultFooter() {
  return (
    <footer className="bg-[#2C3E50] text-[#aeaeae] p-4 text-sm flex items-center justify-end gap-2">
      <p>&copy; Copyright 2025 7xMyBusiness.com</p>
      <span className="font-semibold text-green-700">|</span>
      <a
        className="flex items-center gap-1 underline underline-offset-1"
        href="tel:0800 123 4567"
      >
        <PhoneIcon className="h-4 w-4 text-[#aeaeae]" />
        0800 123 4567
      </a>
    </footer>
  );
}

export default DefaultFooter;
