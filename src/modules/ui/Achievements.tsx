import { AchievementsEn } from "../texts/en/AchievementsEn";
import { AchievementsPt } from "../texts/pt/AchievementsPt";
import AchievementBlock from "./blocks/AchievementBlock";

export default function Achievements({ lang }: { lang: "pt" | "en" }) {
    const achievements = lang === "pt" ? AchievementsPt : AchievementsEn

    return (
        <>
            {achievements.map((ach, i) =>
                <AchievementBlock
                    key={i}
                    title={ach.title}
                    link={ach.link}
                    position={ach.position}
                    event={ach.event}
                    resume={ach.resume}
                    tags={ach.tags}
                />
            )}
        </>
    )
}
