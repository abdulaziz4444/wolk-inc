/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screen: {
        sm: "576px",
        md: "767px",
        lg: "1024px",
        xl: "1283px",
        "2xl": "1320px",
      },
    },
    
    extend: {
      backgroundImage: {
        'hero1': "url('/images/hero1.jpg')",
        'hero2': "url('/images/hero2.jpg') ",
        'hero3': "url('/images/hero3.jpg') ",
        'hero4': "url('/images/hero4.jpg') ",
      },
        colors: {
          purple: "#12062c",
          'vivid-purple': '#932de0',
          
        }
      },
  },
  plugins: [],
};
