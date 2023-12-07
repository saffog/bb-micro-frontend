/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#8EB010",
        shaButton: "#d1f833",
        backDashboard: "#f5f5f5",
        dark: "#2F4858",
        borderGrey: "#c6c6c6"
      },
      boxShadow: {
        baufest: '1px 1px 10px',
      }
    },
  },
  plugins: [],
}

