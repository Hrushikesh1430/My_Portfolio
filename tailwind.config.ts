import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customWhite: "#D9D9D9;", // Example custom color
        dark: "#191919",
        lightContent: "#A7A7A7",
        customBlue: "#13B0F5",
        headingWhite: "#CCC",
        cardBackground: "#363636",
        // customGreen: {
        //   light: '#55efc4',
        //   DEFAULT: '#00b894',
        //   dark: '#00a896',
        // },
      },
    },
  },

  plugins: [],
};
export default config;
