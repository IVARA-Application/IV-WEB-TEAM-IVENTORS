module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#232325",
      shadow: "#FFFFFF",
      secondary: "#2A42E8",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
