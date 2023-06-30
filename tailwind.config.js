/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'hero-img': "url('/gambar1.jpeg')",
    },
    colors: {
      primary: {
        1: '#82C3EC',
        2: '#2c86bf'
      },
      base:{
        1: "#ffffff",
        2: "#454848",
        3: "#171717"
      },
      warning: {
        DEFAULT: "#FA962D",
      },
      danger: {
        DEFAULT: "#df4759",
        1: "#e88490"
      },
      success: {
        DEFAULT: "#42ba96"
      }
      
    }
  },
  plugins: [],
};
