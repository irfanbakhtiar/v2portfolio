/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "667px",
        lg: "960px",
        xl: "1280px",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        title: ["Poppins", "sans-serif"],
      },
      colors: {
        sky: "#38bdf8",
        primary: "#e2e8f0",
        semidark: "#94a3b8",
      },
    },
  },
  plugins: [],
};
