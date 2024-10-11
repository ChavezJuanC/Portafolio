import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaGithub } from "react-icons/fa"; // GitHub
import { FaLinkedin } from "react-icons/fa"; // LinkedIn
import { FaYoutube } from "react-icons/fa"; // YouTube
import { FaItchIo } from "react-icons/fa"; // Itch.io
import { FaTwitter } from "react-icons/fa"; // X (formerly Twitter)

const IconBar = (): JSX.Element => {
    return (
        <>
            <div className="border-2 border-customBlack rounded-md text-4xl w-20 ml-4 hidden sm:block sm:absolute top-64 mt-2">
                <ul>
                    <li>
                        <FaGithub className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                    </li>
                    <li>
                        <FaLinkedin className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                    </li>
                    <li>
                        <FaYoutube className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                    </li>
                    <li>
                        <FaItchIo className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                    </li>
                    <li>
                        <FaTwitter className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default IconBar;
