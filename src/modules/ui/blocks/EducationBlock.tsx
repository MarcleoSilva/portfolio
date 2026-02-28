import { useEffect, useRef, useState } from "react";

export default function EducationBlcok({title, subtitle, bullets}:
    {title: string;bullets: string[]; subtitle: string})
 {
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
        "text-white font-[var(--primary-font)] border-l-4 pl-5 mt-2",
        "transition-all duration-900 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      ].join(" ")}
    >
        <div className="before:border-2 before:bg-blue-950 before:border-white before:rounded-2xl before:size-6 before:absolute
        before:-left-3.5"></div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-1xl font-bold">{subtitle}</h2>
      <ul className="list-disc pt-3 text-1xl font-thin">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}