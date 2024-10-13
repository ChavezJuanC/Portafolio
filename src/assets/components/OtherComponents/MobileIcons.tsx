import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaGithub } from "react-icons/fa"; // GitHub
import { FaLinkedin } from "react-icons/fa"; // LinkedIn
import { FaYoutube } from "react-icons/fa"; // YouTube
import { FaItchIo } from "react-icons/fa"; // Itch.io
import { FaTwitter } from "react-icons/fa"; // X (formerly Twitter)

const MobileIcons = (): JSX.Element => {
    return (
        <ul className="flex flex-wrap justify-center relative top-28 mx-auto items-center text-customBlack font-semibold text-xl sm:hidden">
            <li>
                <a href="https://www.github.com" aria-label="GitHub">
                    <FaGithub className="mx-4 hover:text-customOrange hover:font-bold" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com" aria-label="LinkedIn">
                    <FaLinkedin className="mx-4 hover:text-customOrange hover:font-bold " />
                </a>
            </li>
            <li>
                <a href="https://www." aria-label="Youtube">
                    <FaYoutube className="mx-4 hover:text-customOrange hover:font-bold " />
                </a>
            </li>
            <li>
                <a href="https://www.itch.io" aria-label="Itch.IO">
                    <FaItchIo className="mx-4 hover:text-customOrange hover:font-bold " />
                </a>
            </li>
            <li>
                <a href="http://www.x.com" aria-label="X">
                    <FaTwitter className="mx-4 hover:text-customOrange hover:font-bold " />
                </a>
            </li>
        </ul>
    );
};

export default MobileIcons;
