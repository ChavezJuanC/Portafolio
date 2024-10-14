import React, { useState } from "react";

const ContactForm = (): JSX.Element => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formDataJson = JSON.stringify(formData);
        //process contact form here
        console.log(formDataJson);

        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-transparent p-10 rounded-md shadow-lg w-full max-w-lg mx-auto backdrop-blur-lg"
        >
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-customBlack font-normal mb-2"
                >
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-white text-black rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-customBlack font-normal mb-2"
                >
                    E-mail:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-white text-black rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-customBlack font-normal mb-2"
                >
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-44 p-2 bg-white text-black rounded-md focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-customOrange text-customWhite-normal font-bold py-2 px-4 rounded-md hover:shadow-2xl
                hover:text-white focus:outline-none"
            >
                Send
            </button>
        </form>
    );
};

export default ContactForm;

//To Do
/*
-Find Email Service For the form 
-Create hot toast alerts for form sent correctly / error
*/
