export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf2',
          500: '#1f9d57',
          700: '#146c3a',
          900: '#0d4726'
        }
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif']
      }
    }
  },
  plugins: []
};
