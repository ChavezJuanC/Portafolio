import React, { FormEvent, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = (): JSX.Element => {
    useEffect(() => {
        const ticketNumber: string = createTicket();

        setFormData((prevFormData) => ({
            ...prevFormData,
            contact_number: ticketNumber,
        }));
    }, []);

    const [formData, setFormData] = useState<{ [key: string]: string }>({
        user_name: "",
        user_email: "",
        message: "",
        contact_number: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        sendForm(e);

        setFormData({
            user_name: "",
            user_email: "",
            message: "",
            contact_number: "",
        });
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

    interface EmailJSResponse {
        status: number;
        text: string;
    }

    const sendForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault(); // Properly typed as FormEvent
        const contact_service_id: string = "contact_service";
        const contact_form_id: string = "contact_form";
        const public_key: string = "";

        try {
            // Send form data via EmailJS with the dynamically added contact_number
            const res: EmailJSResponse = await emailjs.sendForm(
                contact_service_id,
                contact_form_id,
                e.target as HTMLFormElement,
                public_key
            );
            //debug
            toast.success("Contact Form Sent");
        } catch (error: any) {
            toast.error("Error Sending Form'");
            console.error(error.text);
        }
    };

    const createTicket = (): string => {
        const contactDate = new Date();
        const month: string = String(contactDate.getMonth() + 1).padStart(
            2,
            "0"
        ); // Months are 0-indexed, so add 1
        const day: string = String(contactDate.getDate()).padStart(2, "0");
        const hour: string =
            contactDate.getHours() >= 12
                ? String(contactDate.getHours() % 12).padStart(2, "0")
                : String(contactDate.getHours());
        const minute: string = String(contactDate.getMinutes());

        return `${month}${day}${hour}${minute}`;
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
                    name="user_name"
                    value={formData.user_name}
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
                    name="user_email"
                    value={formData.user_email}
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
            <input
                type="hidden"
                name="contact_number"
                value={formData.contact_number} // The ticket number will be set here
            />
            <button
                type="submit"
                className="w-full bg-customOrange text-customWhite-normal font-bold py-2 px-4 rounded-md hover:shadow-2xl
                hover:text-white focus:outline-none"
            >
                Send
            </button>
            <Toaster />
        </form>
    );
};

export default ContactForm;

//To Do
/*

- Configure environment variable management.

*/
