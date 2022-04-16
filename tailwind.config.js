module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      desktop: "1440px",
    },
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-gray": "hsl(217, 12%, 63%)",
      gray: "hsl(216, 12%, 54%)",
      blue: "hsl(213, 19%, 18%)",
      "dark-blue": "hsl(216, 12%, 8%)",
    },
    fontFamily: {
      serif: ["Overpass", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {},
  },
  plugins: [],
};
