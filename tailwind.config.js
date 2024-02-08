/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        playfairR: '#E92577',
        playfairB: '#82BBFF',
        header:'#F4F4F4',
        myPurple: '#4731D3',
        myGreen:'#CBF281',
        myDarkC:'#2A262B',
        myDarkG:'#484148',
        myProjects2:'#495351',
        myProjects1:'#2D3235',
        darkH:'#2A262B',
        darkS:'#484148',
        darkPi:'#525252',
        darkPr:'#',
        switch1:'#E92577',
        darkModeY:'#777777',
        switch2:'#FFE86E'
      }
    },
    fontSize: {
      sm: "16px",
      base: "18px",
      medium: "24px",
      xl: "29px",
      "2xl": "30px",
      "3xl": "36px",
      "4xl": "42px",
      "5xl": "48px",
    },
    fontFamily: {
      inter: ["Inter"],
      playfair: ["Playfair Display", "serif"],
    },
    backgroundImage: {
      pcImg: "url('./pc-img.png')",
    },
  },
  plugins: [],
};
