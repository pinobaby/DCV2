/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        DC1: '#1e2124',
        DC2: '#424549',
        DC3: '#36393e',
        DC4: '#2e3136',
        DC5: '#4a4c51',
        DC6: '#7289da',

      },
    
    },
  },
  plugins: [],
}

