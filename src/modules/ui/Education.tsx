import EducationBlcok from "./blocks/EducationBlock";
import { EducationPt } from "../texts/pt/EducationPt";
import { EducationEn } from "../texts/en/EducationEn";

export default function Education( {lang}:{lang:"pt" | "en"}){

    const experiences = lang === "pt" ? EducationPt : EducationEn;


    return(
        <>
            {experiences.map((exp) =>
        <EducationBlcok key={exp.field}  title={exp.field} subtitle={exp.uni} 
        bullets={exp.skills}>

        </EducationBlcok>
        )}
        </>
    )
}
