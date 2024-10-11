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
            <div className="border-2 border-customBlack rounded-md text-4xl w-14 ml-4 hidden sm:block sm:absolute top-72">
                <ul>
                    <Link to="github.com">
                        <li>
                            <FaGithub className="mx-auto my-7 hover:animate-pulse text-slate-900" />
                            <FaLinkedin className="mx-auto my-7 hover:animate-pulse text-slate-900" />
                            <FaYoutube className="mx-auto my-7 hover:animate-pulse text-slate-900" />
                            <FaItchIo className="mx-auto my-7 hover:animate-pulse text-slate-900" />
                            <FaTwitter className="mx-auto my-7 hover:animate-pulse text-slate-900" />
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default IconBar;
