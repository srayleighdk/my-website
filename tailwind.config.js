/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "img-bg": "url('./public/images/slide1.webp')",
      },
      colors: {
        primaryColor: "#00644b",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
