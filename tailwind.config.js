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
        "hero-pattern": "url('../../public/assets/img/onred.jpg')",

        "about-pattern": "url('../../public/assets/img/kid.jpeg')",
      },
    },
  },
  plugins: [],
};
