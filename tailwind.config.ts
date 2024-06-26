import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        bg_image: "url('./public/template/images/bg-mobile-light.jpg')",
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "check-from_colour": "hsl(192, 100%, 67%)",
        "check-to_colour": "hsl(280, 87%, 65%)",

        // Light Theme
        "very-light-gray-L": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue-L": "hsl(236, 33%, 92%)",
        "light-grayish-blue-L": "hsl(233, 11%, 84%)",
        "dark-grayish-blue-L": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue-L": "hsl(235, 19%, 35%)",

        // Dark Theme
        "very-bark-blue-D": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue-D": "hsl(235, 24%, 19%)",
        "light-grayish-blue-D": "hsl(234, 39%, 85%)",
        "light-grayish-blue-D_": "hsl(236, 33%, 92%)", //(hover)
        "dark-grayish-blue-D": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-D": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-D_": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".scrollbar-thin": {
    //       scrollbarWidth: "thin",
    //       scrollbarColor: "rgb(31 29 29) white",
    //     },
    //     ".scrollbar-webkit": {
    //       "&::-webkit-scrollbar": {
    //         width: "8px",
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         background: "white",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         backgroundColor: "rgb(31 41 55)",
    //         borderRadius: "20px",
    //         border: "1px solid white",
    //       },
    //     },
    //   };

    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // },
  ],
};
export default config;
