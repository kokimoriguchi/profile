/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "big-bg-img":
          "url(/Users/kokimoriguchi/my-profile/front/public/images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg)",
      },
      animation: {
        "bg-pan-left": "bg-pan-left 10s ease infinite",
        "flip-in-hor-bottom":
          "flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
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
