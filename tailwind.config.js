module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px"
		},
    extend: {
      colors: {
				brightRed: "hsl(12, 88%, 59%)",
				white: "#ffffff",
				dark: "#333333"
			},
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}