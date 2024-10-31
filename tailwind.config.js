/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pt-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonPrint: "#22B5C8",
      },
    },
  },
  plugins: [],
};
