import { type } from '@testing-library/user-event/dist/type'

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
      borderGray:'#EDF3FA',
      darkBlue:'#0D296E',
      tripDone:'#FFBD14',
      linkBlue: '#0889A5',
      
    },
    fontFamily: {
      IRsans: ["IRANSans"],
      custom2: ["IRanianSans", "sans-serif"],
      'shabnam':["Shabnam"]
    },
    boxShadow:{
      blueShadow:'0px 4px 20px rgba(8, 137, 165, 0.68)',
      midGrayShadow:'0px 4px 20px rgba(146, 146, 146, 0.25)',
      blackShadow:'0px 4px 20px 0px  rgba(0, 0, 0, 0.25)',
      redShadow:'0px 4px 20px rgba(255, 0, 0, 0.43)',
      greenShadow:'0px 4px 20px rgba(58, 181, 14, 0.49)',
      
    },
    screens:{
      '2xl':{'max':'1536px'},
      'xl': {'max': '1280px'},
      'xl-lg': {'max': '1195px'},
      'lg': {'max': '1024px'},
      'lg-md': {'max': '913px'},
      'md':{'max' : '768px'},
      'md-sm':{'max' : '680px'},
      'sm':{'max':'640px'},
      'sm-xs':{'max':'579px'},
      'xs-510':{'max':'510px'},
      'xs':{'max':'480px'},
      '2xs':{'max':'356px'}

  
    }
  },
  plugins: [],
}

