/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../../assets/img/onred.jpg')",
        "footer-texture": "url('../../assets/img/me.jpg')",
      },
    },
  },
  plugins: [],
};
