module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",         // source folder
    "./src/components/*.{js,jsx}",  // components folder
    "./src/components/Sticky notes/*.{js,jsx}"  // components folder
  ],
  theme: {
    fontFamily: {
      'NOTES-FONT': ["Architects Daughter, cursive"]
    }
  },
  plugins: [require("tailwind-scrollbar")],
  
}
