/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // includes all your components
    ],
    darkMode: "class", // enables class-based dark mode toggling
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 15s linear infinite',
            },
            colors: {
                dark: "#0d0d0d",
                light: "#f5f5f5",
            },
        },
    },
    plugins: [],
};
