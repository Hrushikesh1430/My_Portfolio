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
        dividerBlack: "#191919",
        customPink: "#E70FAA",
        // customGreen: {
        //   light: '#55efc4',
        //   DEFAULT: '#00b894',
        //   dark: '#00a896',
        // },
      },
      animation: {
        text: "text 5s ease infinite",
        "loop-scroll": "loop-scroll 25s linear infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },

  plugins: [],
};
export default config;
