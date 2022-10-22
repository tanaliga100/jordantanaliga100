/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "hero-pattern": "url()",
        primary: "url('../../public/assets/img/gray.jpeg')",

        secondary: "url('../../public/assets/img/code.jpg')",
        sub: "url('../../public/assets/img/onred.jpg')",
        code: "url('../../public/assets/img/stars.jpg')",
      },
    },
  },
  plugins: [],
};
