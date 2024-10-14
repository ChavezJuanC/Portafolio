import React from "react";
import SkillList from "../OtherComponents/SkillList";

const Skills = (): JSX.Element => {

    return (
        <div>
            <h1 className="text-2xl lg:text-4xl text-center font-bold text-customBlack my-5 xl:my-10">
                MY SKILLS
            </h1>
            <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                <SkillList title="Languages">
                    <ul className="list-disc list-inside pl-3 grid text-md text-customBlack">
                        <li className="my-2">JavaScript (ES6+)</li>
                        <li className="my-2">TypeScript</li>
                        <li className="my-2">Python3</li>
                        <li className="my-2">C#</li>
                        <li className="my-2">GDScript</li>
                        <li>HTML / CSS</li>
                    </ul>
                </SkillList>
                <SkillList title="Frontend Development">
                    <ul className="list-disc list-inside pl-5 grid text-md text-customBlack">
                        <li className="my-2">React.js</li>
                        <li className="my-2">Next.js</li>
                        <li className="my-2">Tailwind CSS</li>
                        <li className="my-2">
                            React Native (Mobile Development)
                        </li>
                    </ul>
                </SkillList>
                <SkillList title="Backend Development">
                    <ul className="list-disc list-inside pl-5 grid text-md text-customBlack">
                        <li className="my-2">Express.js</li>
                        <li className="my-2">Flask</li>
                        <li className="my-2">Django</li>
                        <li className="my-2">FastAPI</li>
                    </ul>
                </SkillList>
                <SkillList title="Databases">
                    <ul className="list-disc list-inside pl-5 grid text-md text-customBlack">
                        <li className="my-2">MongoDB</li>
                        <li className="my-2">Firebase</li>
                        <li className="my-2">SQL</li>
                    </ul>
                </SkillList>
                <SkillList title="Tools & Platforms">
                    <ul className="list-disc list-inside pl-5 grid text-md text-customBlack">
                        <li className="my-2">Git & GitHub</li>
                        <li className="my-2">NPM / Yarn</li>
                        <li className="my-2">Linux / Unix systems</li>
                    </ul>
                </SkillList>
                <SkillList title="Game Development:">
                    <ul className="list-disc list-inside pl-5 grid text-md text-customBlack">
                        <li className="my-2">Unity (C#)</li>
                        <li className="my-2">Godot (GDScript)</li>
                        <li className="my-2">2D Game Design</li>
                    </ul>
                </SkillList>
            </div>
        </div>
    );
};

export default Skills;


///To Do
//Reformat code into an interface, an array of objs and than map it.