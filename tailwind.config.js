/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-right": "bounceRight 1s infinite",
        "bounce-left": "bounceLeft 1s infinite",
      },
      keyframes: {
        bounceRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
        bounceLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-6px)" }, // 👈 Left direction
        },
      },
    },
  },
  plugins: [],
}
