import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaGithub } from "react-icons/fa";

const IconBar = (): JSX.Element => {
    return (
        <>
            <div className="border-2 border-customBlack rounded-md text-4xl w-14 ml-4 hidden sm:block sm:absolute top-80">
                <ul>
                    <Link to="github.com">
                        <li>
                            <FaGithub className="mx-auto my-5 hover:animate-pulse text-slate-900" />
                            <FaGithub className="mx-auto my-5 hover:animate-pulse text-slate-900" />
                            <FaGithub className="mx-auto my-5 hover:animate-pulse text-slate-900" />
                            <FaGithub className="mx-auto my-5 hover:animate-pulse text-slate-900" />
                            <FaGithub className="mx-auto my-5 hover:animate-pulse text-slate-900" />
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default IconBar;
