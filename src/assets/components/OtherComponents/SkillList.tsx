import React, { Children } from "react";

interface SkillProps {
    children: React.ReactNode;
    title: string;
}

const SkillList = ({ children, title }: SkillProps): JSX.Element => {
    return (
        <div className="shadow-md hover:shadow-2x w-80 h-80 bg-black bg-opacity-5">
            <h1 className="text-customOrange text-xl text-center my-2 font-bold">
                {title}
            </h1>
            <div>{children}</div>
        </div>
    );
};

export default SkillList;
