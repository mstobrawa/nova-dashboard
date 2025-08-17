/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light theme
        dashboardPrimary: "#4F46E5",
        dashboardSecondary: "#FFFFFF",
        dashboardText: "#1E1E2F",
        dashboardAccent: "#3B82F6",

        // Dark theme
        dashboardPrimaryDark: "#3730A3",
        dashboardSecondaryDark: "#2C2C3E",
        dashboardTextDark: "#FFFFFF",
        dashboardAccentDark: "#60A5FA",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
