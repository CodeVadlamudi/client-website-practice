/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#232536",
        yellowColor: "#FFD050",
        purpleColor: "#592EA9",
        darkGrey: "#4C4C4C",
        mediumGrey: "#6D6E76",
        lightGrey: "#F4F4F4",
        lavender: "#F4F0F8",
        lightYellow: "#FBF6EA",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
