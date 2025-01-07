/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {
      fontFamily: {
        poppins: ["Roboto", ...defaultTheme.sans],
        sixtyFour: ["Sixtyfour", ...defaultTheme.serif],
      },
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
  plugins: [],
};

// caf21e
