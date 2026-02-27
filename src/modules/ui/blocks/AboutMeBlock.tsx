import { useState } from "react";
import { ButtonText } from "./Button";
import { aboutMeText } from "../../texts/pt/AboutMePt";

export default function AboutMeBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(v => !v)} className="flex justify-center pt-5">
        <ButtonText text="Sobre mim" />
      </div>

      <div className="flex justify-center pt-5">
        <div
          className={`w-4/5 sm:w-1/2 transition-all duration-700 ease-out overflow-hidden
            ${isOpen ? "opacity-100 max-h-125 translate-y-0 overflow-scroll sm:max-h-100" : "opacity-0 max-h-0 -translate-y-2"}
          `}
        >
          <p className="text-white font-[--primary-font] text-center md:text-[20px]">
            {aboutMeText}
          </p>
        </div>
      </div>
    </div>
  );
}