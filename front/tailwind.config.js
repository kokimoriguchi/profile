/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#020310",
        "custom-bg": "#E3D7D7",
        "custom-green": "#46E3BE",
      },
      animation: {
        "tracking-in-expand":
          "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "bg-pan-left": "bg-pan-left 10s ease infinite",
        "flip-in-hor-bottom":
          "flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        rotate: "rotate 5s linear infinite",
        "rotate-reverse": "rotate-reverse 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            opacity: "1",
          },
        },
        "bg-pan-left": {
          "0%": {
            "background-position": "100% 50%",
          },
          to: {
            "background-position": "0% 50%",
          },
        },
        "flip-in-hor-bottom": {
          "0%": {
            transform: "rotateX(80deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
