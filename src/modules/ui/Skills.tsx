
import { SkillsEn } from "../texts/en/SkillsEn";
import { SkillsPt } from "../texts/pt/SkillsPt";
import SkillBlock from "./blocks/SkillBlock";

export default function Skills( {lang}:{lang:"pt" | "en"}){

    const experiences = lang === "pt" ? SkillsPt : SkillsEn;


    return(
        <>
            {experiences.map((exp) =>
        <SkillBlock key={exp.field}  title={exp.field} 
        bullets={exp.skills}>

        </SkillBlock>
        )}
        </>
    )
}
