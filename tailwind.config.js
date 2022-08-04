/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-light": "#f6f7f3",
        "base-dark": "#0F0D35",
        "base-light-dark": "#393B63",
        "base-peach": "#F4BB8A",
      },
    },
  },
  plugins: [],
};
