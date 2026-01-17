/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
      },
      keyframes: {
        heroTitle: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroSub: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        heroTitle: "heroTitle 700ms ease-out 120ms forwards",
        heroSub: "heroSub 700ms ease-out 260ms forwards",
      },


    },
  },
  plugins: [],
};
