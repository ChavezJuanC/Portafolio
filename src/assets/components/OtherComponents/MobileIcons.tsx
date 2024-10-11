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
            <FaGithub className="mx-4 hover:text-customOrange hover:font-bold" />
            <FaLinkedin className="mx-4 hover:text-customOrange hover:font-bold " />
            <FaYoutube className="mx-4 hover:text-customOrange hover:font-bold " />
            <FaItchIo className="mx-4 hover:text-customOrange hover:font-bold " />
            <FaTwitter className="mx-4 hover:text-customOrange hover:font-bold " />
        </ul>
    );
};

export default MobileIcons;
