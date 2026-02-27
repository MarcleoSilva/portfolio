import ExperienceBlock from "./blocks/ExperienceBlock";
import { ProfessionalExperiencesPt } from "../texts/pt/ExperiencesPt";
import { ProfessionalExperiencesEn } from "../texts/en/ExperiencesEn";

export default function Qualifications( {lang}:{lang:"pt" | "en"}){

    const experiences = lang === "pt" ? ProfessionalExperiencesPt : ProfessionalExperiencesEn;


    return(
        <>
            {experiences.map((exp) =>
        <ExperienceBlock key={exp.place}  title={exp.role} subtitle={exp.place} 
        bullets={exp.work}>

        </ExperienceBlock>
        )}
        </>
    )
}
