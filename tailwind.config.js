/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      mainColor:'#0889A5',
      black:'#000000',
      white:'#ffffff',
      lightGray:'#F4F4F4',
      darkGray:'#696969',
      midGray:'#BFBFBF',
      red:'#E50000',
      green:'#0F9B0C',
      lightBlue:'#BBF3FF',
      borderGray:'#EDF3FA'
    },
    fontFamily:{
    IRsans:'IRANSans'
    },
    boxShadow:{
      blueShadow:'0px 4px 20px rgba(8, 137, 165, 0.68)',
      blackShadow:'0px 4px 50px rgba(146, 146, 146, 0.25)',
    }
  },
  plugins: [],
}

