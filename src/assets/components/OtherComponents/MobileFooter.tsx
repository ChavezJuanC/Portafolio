import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = (): JSX.Element => {
    return (
        <ul className="flex relative top-36 justify-center sm:hidden">
            <Link
                to="/about"
                className="text-lg font-normal mx-3 my-1"
            >
                <li>About</li>
            </Link>
            <Link
                to="/contact"
                className="text-lg font-normal mx-3 my-1"
            >
                <li>Contact</li>
            </Link>
            <Link
                to="/projects"
                className="text-lg font-normal mx-3 my-1"
            >
                <li>Projects</li>
            </Link>
            <Link
                to="/skills"
                className="text-lg font-normal mx-3 my-1"
            >
                <li>Skills</li>
            </Link>
        </ul>
    );
};

export default MobileFooter;
