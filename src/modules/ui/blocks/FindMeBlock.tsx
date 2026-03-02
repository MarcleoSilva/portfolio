import { useEffect, useRef, useState } from "react";
import { ButtonCV, ButtonGitHub, ButtonLinkedin, ButtonMail } from "./Button";
import { IoLocationSharp } from "react-icons/io5";

export default function FindMeBlock({lang}:{lang:"pt"|"en"})
 {
  const PtCV = "./CV_Marcelo_FullstackPt.pdf"
  const EnCV = "./CV_Marcelo_FullstackEn.pdf"

  const language = lang === "pt" ? PtCV : EnCV;
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "pl-5 mt-2",
        "transition-all duration-900 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      ].join(" ")}>
        
        <div className="flex flex-row gap-5">
          <a href="https://github.com/MarcleoSilva"><ButtonGitHub text="">
          </ButtonGitHub> </a>
          <a href="https://www.linkedin.com/in/marcelo-araujo-s/"><ButtonLinkedin text="">
          </ButtonLinkedin></a>
          <a href={language}><ButtonCV text=""></ButtonCV></a>
          <a href="mailto:marceloaraujosilva739@gmail.com"><ButtonMail text=""></ButtonMail></a>
        </div>
        <div className="grid grid-cols-2 justify-left pt-10 text-white
        font-[var(--primary-font)] text-[20px]">
          
          <p className="flex gap-2">
            <IoLocationSharp size={25} color="white"/>Salvador, BA, Brasil
          </p>
        </div>
        

        
    </div>

  );
}