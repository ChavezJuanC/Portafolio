import React from "react";
import IconBar from "../OtherComponents/IconBar";
import MobileIcons from "../OtherComponents/MobileIcons";
import MobileFooter from "../OtherComponents/MobileFooter";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
    return (
        <div className="">
            <IconBar />
            <div className="relative top-16 md:top-24 lg:top-52 grid justify-center items-center text-center lg:grid-cols-2 lg:gap-0 lg:text-left w-3/4 mx-auto">
                <img
                    src="src/assets/Images/Photo.png"
                    alt="Photo"
                    className="max-w-80 mx-auto mb-0 lg:mb-0 lg:mr-5 rounded-full"
                />
                <div className="flex flex-col items-center lg:items-start max-w-96 mt-14 lg:my-auto lg:ml-5">
                    <div className="font-bold">
                        <span className="text-4xl text-customOrange">
                            Hey, this is Juan!
                        </span>
                        <br />
                        <span className="text-2xl text-customBlack">
                            Full Stack Web Dev and Hobbyist Game Dev.
                        </span>
                    </div>
                    <Link
                        className="border-2 hover:border-black hover:shadow-2xl text-customBlack rounded-lg border-customBlack text-xl px-2 py-0.5
                        font-semibold mt-4 lg:mt-0 self-center lg:self-end w-32 relative lg:right-6 text-center"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div>
                <MobileIcons />
            </div>
            <div>
                <MobileFooter />
            </div>
        </div>
    );
};

export default Home;
