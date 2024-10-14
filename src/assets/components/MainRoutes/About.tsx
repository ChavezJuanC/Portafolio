import React from "react";

const About = (): JSX.Element => {
    return (
        <div className="text-center mt-16">
            <h1 className=" my-6 font-bold text-2xl md:text-4xl md:mt-16 lg:mt-36">
                About Me
            </h1>
            <div className="font-normal text-lg mx-6 md:w-1/2 md:mx-auto">
                <div className="my-5">
                    My passion for computers began at an early age. After
                    exploring pentesting, I quickly realized that everything I
                    love—computers, games, and software—is powered by code. This
                    led me to focus on full-stack development, where I work
                    extensively with JavaScript (React, Next.js), CSS
                    (Tailwind), and backend frameworks like Express, Flask,
                    Django, and MongoDB.
                </div>
                <div className="my-5">
                    I've developed projects such as a mobile app for tracking
                    Dota 2 stats using React Native and a desktop app for
                    managing appointments and patient information with Electron
                    and MongoDB. Along the way, I’ve also gained experience with
                    Python, TypeScript, and C#.
                </div>
                <div className="my-5">
                    Currently, I’m pursuing a Software Engineering degree while
                    continuing to build web apps, mobile applications, and
                    games. My aim is to create impactful, user-centered
                    solutions while constantly expanding my knowledge in
                    software development.
                </div>
            </div>
        </div>
    );
};

export default About;
