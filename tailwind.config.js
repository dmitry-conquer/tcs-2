module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      fontSize: {},
      colors: {
        primary: {
          light: "#93CE20",
          dark: "#024731",
        },
        typo: {
          dark: "#030519",
          light: "#515151",
        },
      },
    },
    fontFamily: {
      monts: ["Montserrat", "sans-serif"],
    },
  },
};
