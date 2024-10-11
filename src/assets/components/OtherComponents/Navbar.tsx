import React from "react";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
    return (
        <>
            <div className="bg-customOrange h-16 flex justify-between">
                <Link className="mx-auto sm:mx-10 my-auto" to="/">
                    <h1 className="text-xl font-semibold hover:font-bold hover:text-customWhite-light text-customBlack">
                        SKRPTZ CODE
                    </h1>
                </Link>
                <ul className="hidden sm:flex my-auto">
                    <Link
                        to={"/about"}
                        className="mx-3 text-xl font-semibold hover:font-bold hover:text-customWhite-light text-customBlack"
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        to={"/contact"}
                        className="mx-3 text-xl font-semibold hover:font-bold hover:text-customWhite-light text-customBlack"
                    >
                        <li>Contact</li>
                    </Link>
                    <Link
                        to={"/projects"}
                        className="mx-3 text-xl font-semibold hover:font-bold hover:text-customWhite-light text-customBlack"
                    >
                        <li>Projects</li>
                    </Link>
                    <Link
                        to={"/skills"}
                        className="mx-3 text-xl font-semibold hover:font-bold hover:text-customWhite-light text-customBlack"
                    >
                        <li>Skills</li>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
