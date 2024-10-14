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
                        <a href="https://www.github.com" aria-label="GitHub">
                            <FaGithub className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" aria-label="Youtube">
                            <FaYoutube className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.itch.io" aria-label="Itch.io">
                            <FaItchIo className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.x.com" aria-label="X">
                            <FaTwitter className="mx-auto my-10 hover:animate-pulse text-customBlack hover:text-customOrange" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default IconBar;
