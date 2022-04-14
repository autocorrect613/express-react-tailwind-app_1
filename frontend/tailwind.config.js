module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,json}",         
    "./src/components/buttons/**/*.{js,jsx,json}",
    "./src/components/modals/*.{js,jsx,json}",  
    "./src/components/icons/Heroicons.jsx",
    "./src/components/*.{js,jsx,json}", 
    "./src/components/Sticky notes/*.{js,jsx,json}",  
    "./src/navbar/**/*.{js,jsx,json}",
    "./src/navbar/drawer/**/*.{js,jsx,json}",
    "./src/navbar/row 0/**/*.{js,jsx,json}",
    "./src/navbar/row 1/**/*.{js,jsx,json}",
    "./src/navbar/row 2/**/*.{js,jsx,json}"
  ],
  theme: {
    fontFamily: {
      'NOTES-FONT': ["Architects Daughter, cursive"]
    }
  },
  plugins: [require("tailwind-scrollbar")],
  
}
