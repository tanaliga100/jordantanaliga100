/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: "url('../../public/assets/img/gray.jpeg')",
        secondary: "url('../../public/assets/img/code.jpg')",
        onPiano: "url('../../public/assets/img/piame.jpg')",
        onRed: "url('../../public/assets/img/onred.jpg')",
        circle: "url('../../public/assets/img/circle-with-a.gif')",
        onCircle: "url('../../public/assets/img/circle.gif')",
        bgCoding: "url('../../public/assets/img/coding.gif')",
        bgStars: "url('../../public/assets/img/stars.jpg')",
        bgMoon: "url('../../public/assets/img/moon.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
