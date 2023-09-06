/** @type {import('tailwindcss').Config} */
//https://uicolors.app/edit?sv1=secondary:50-f1fbea/100-ddf7d0/200-bfefa7/300-97e274/400-7ad553/500-52b82a/600-3d921e/700-30701b/800-2a591b/900-254c1b/950-10290a;primary:50-eefbfd/100-d4f4f9/200-aee7f3/300-76d4ea/400-3ebbda/500-1b9cbf/600-1a7da0/700-1c6582/800-1f546b/900-1e465b/950-0e2d3e
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefbfd",
          100: "#d4f4f9",
          200: "#aee7f3",
          300: "#76d4ea",
          400: "#3ebbda",
          500: "#1b9cbf",
          600: "#1a7da0",
          700: "#1c6582",
          800: "#1f546b",
          900: "#1e465b",
          950: "#0e2d3e",
        },
        secondary: {
          50: "#f1fbea",
          100: "#ddf7d0",
          200: "#bfefa7",
          300: "#97e274",
          400: "#7ad553",
          500: "#52b82a",
          600: "#3d921e",
          700: "#30701b",
          800: "#2a591b",
          900: "#254c1b",
          950: "#10290a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
