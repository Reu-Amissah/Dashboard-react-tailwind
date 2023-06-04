/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lato", "sans-serif"],
        header: ["Open Sans", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
