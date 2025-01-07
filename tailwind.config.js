/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Roboto", ...defaultTheme.fontFamily.sans],
        sixtyFour: ["Sixtyfour", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#caf21e",
        secondary: "#000000",
        background: "#131313",
        white: "#ffffff",
      },
      backgroundImage: {
        "landing-bg": "url('/src/assets/landing-bg.png')",
        "home-bg": "url('/src/assets/bg-home2.png')",
        "project-bg": "url('/src/assets/projects-bg.png')",
        "securiti-bg": "url('/src/assets/bg-securiti.jpeg')",
        "about-bg": "url('/src/assets/about.jpeg')",
        "proEnd-bg": "url('/src/assets/project_end.png')",
      },
    },
  },
  plugins: [],
};
