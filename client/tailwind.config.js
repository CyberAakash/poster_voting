/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenYellow: "#88d9d0",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

