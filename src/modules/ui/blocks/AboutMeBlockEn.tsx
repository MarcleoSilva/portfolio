import { useState } from "react";
import { ButtonText } from "./Button";
import { aboutMeTextEn } from "../../texts/en/AboutMeEn";

export default function AboutMeBlockEn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(v => !v)} className="flex justify-center pt-5">
        <ButtonText text="About me" />
      </div>

      <div className="flex justify-center pt-5">
        <div
          className={`w-4/5 sm:w-1/2 transition-all duration-700 ease-out overflow-hidden
            ${isOpen ? "opacity-100 max-h-125 translate-y-0 overflow-auto sm:max-h-100" : "opacity-0 max-h-0 -translate-y-2"}
          `}
        >
          <p className="text-white font-[--primary-font] text-center md:text-[20px]">
            {aboutMeTextEn}
          </p>
        </div>
      </div>
    </div>
  );
}