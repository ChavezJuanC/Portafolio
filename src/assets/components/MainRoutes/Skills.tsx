import React from "react";
import SkillList from "../OtherComponents/SkillList";

const Skills = (): JSX.Element => {
    interface skillsInt {
        skillType: string;
        skills: string[];
    }

    const skillsArr: skillsInt[] = [
        {
            skillType: "Languages",
            skills: [
                "JavaScript (ES6+)",
                "TypeScript",
                "Python 3",
                "C#",
                "GDScript",
                "HTML / CSS",
            ],
        },
        {
            skillType: "Frontend Development",
            skills: [
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "React Native (Mobile Development)",
            ],
        },
        {
            skillType: "Backend Development",
            skills: ["Express.js", "Flask", "Django", "FastAPI"],
        },
        {
            skillType: "Databases",
            skills: ["MongoDB", "Firebase", "SQL databases"],
        },
        {
            skillType: "Tools & Platforms",
            skills: ["Git & GitHub", "NPM / Yarn", "Linux / Unix systems"],
        },
        {
            skillType: "Game Development",
            skills: ["Unity (C#)", "Godot (GDScript)", "2D Game Design"],
        },
    ];

    const skillCards = skillsArr.map((element) => (
        <SkillList title={element.skillType}>
            <ul className="list-disc list-inside pl-3 grid text-md text-customBlack">
                {element.skills.map((skill) => (
                    <li className="my-2">{skill}</li>
                ))}
            </ul>
        </SkillList>
    ));

    return (
        <div>
            <h1 className="text-2xl lg:text-4xl text-center font-bold text-customBlack my-5 xl:my-10">
                MY SKILLS
            </h1>
            <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                {skillCards}
            </div>
        </div>
    );
};

export default Skills;

