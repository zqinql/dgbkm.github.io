module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
      container: {
          center: true,
          padding: {
              'xl': '10rem',
          },
      },
      extend: {
          colors: {
              primary: '#1F4690',
              dark: '#0f172a',
              secondary: '#64748b'

          },
          screens: {
              'sm': '475px'
          }


      },
  },
  plugins: [],
}