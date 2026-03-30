import { ProjectsEn } from "../texts/en/ProjectsEn";
import { ProjectsPt } from "../texts/pt/ProjectsPt";
import ProjectBlock from "./blocks/ProjectBlock";

export default function Projects({lang}:{lang:"pt" | "en"}){
    const projects = lang === "pt" ? ProjectsPt : ProjectsEn

    return (
        <>
            {projects.map((prj) => 
        <ProjectBlock title={prj.title} link={prj.link} resume={prj.resume} toolkit={prj.toolkit}/>
        )}
        </>
    )

}