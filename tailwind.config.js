/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: 
      // {"coundown-image" : "url('/Rectangle 13.png'))"},
      {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ['Satoshi-Regular', '"Plus Jakarta Sans"', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', '"Plus Jakarta Sans"', 'sans-serif'],
        'satoshi-blackitalic': ['Satoshi-BlackItalic', '"Plus Jakarta Sans"', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', '"Plus Jakarta Sans"', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', '"Plus Jakarta Sans"', 'sans-serif'],
        'satoshi-light': ['Satoshi-Light', '"Plus Jakarta Sans"', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', '"Plus Jakarta Sans"', 'sans-serif'],
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',    
        'sm': '0.875rem',
        'base': '1rem',     
        'lg': '1.125rem',   
        'xl': '1.25rem',
        '2xl': '1.5rem',    
        '3xl': '1.875rem',  
        '4xl': '2.25rem',   
        '5xl': '38px',      
        '6xl': '3.75rem',      
      },
      fontWeight: {
        'thiner': '50',   
        'thin': '100',       
        'light': '300',      
        'normal': '400',     
        'medium': '550',     
        'semibold': '600',   
        'bold': '700',      
        'extrabold': '800',  
        'black': '900',      
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out  forwards',
      },
       
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
