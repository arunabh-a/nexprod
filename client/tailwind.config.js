const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ...
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                text: '#ebe9fc',
                background: '#222831',
                primary: '#FF5722',
                secondary: '#2D4059',
                accent: '#EEEEEE',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
