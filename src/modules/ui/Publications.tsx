import PublicationBlock from "./blocks/PublicationBlock";
import { PublicationsPt } from "../texts/pt/PublicationsPt";
import { PublicationsEn } from "../texts/en/PublicationsEn";

export default function Publications( {lang}:{lang:"pt" | "en"}){

    const experiences = lang === "pt" ? PublicationsPt : PublicationsEn;


    return(
        <>
            {experiences.map((exp) =>
        <PublicationBlock key={exp.title}  title={exp.title} subtitle={exp.doi} 
        bullets={exp.participation}>

        </PublicationBlock>
        )}
        </>
    )
}
