/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                red: "var(--red)",
                blue: "var(--blue)",
                white: "var(--white)",
                "very-light-grayish-blue": "var(--very-light-grayish-blue)",
                "light-grayish-blue-1": "var(--light-grayish-blue-1)",
                "light-grayish-blue-2": "var(--light-grayish-blue-2)",
                "grayish-blue": "var(--grayish-blue)",
                "dark-grayish-blue": "var(--dark-grayish-blue)",
                "very-dark-blue": "var(--very-dark-blue)",
            },
        },
    },
    plugins: [],
};
export default config;
