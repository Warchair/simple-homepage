module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        poppins: "Poppins"
      },
      minWidth: {
        'xl': '400px',
        'lg':'300px',
        'md':'200px',
        'sm':'175px',
        '1000':'1000px'
      },
      height: {
        '100': '100vh',
        '90': '100vh',
        '80': '80vh'
      },
      width: {
        '3000':'3000px'
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
