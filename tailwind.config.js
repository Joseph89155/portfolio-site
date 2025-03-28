export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customLight: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Custom box shadow
      },
      padding: {
        custom: "0.75rem", // Custom padding
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to right, #e0eafc, #cfdef3)',
        'dark-gradient': 'linear-gradient(to right, #1f2937, #111827)',
      },
    },
  },
  darkMode: "class", // Ensure dark mode is class-based
  plugins: [],
};
