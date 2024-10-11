/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customOrange: "#AA5D44",
                customBlack: "#000200",
                customWhite: {
                    normal: "#BFA89E",
                    light: "#E6DCD7",
                },
            },
        },
        plugins: [],
    },
};
