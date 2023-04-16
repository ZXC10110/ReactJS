/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '116': '29rem',
        '128': '32rem',
        '160': '40rem',
        '320': '80rem',
        '88': '22rem',
      }, 
      backgroundImage: {
        'background': "url('../src/background.avif')",
      },
    },
  },
  plugins: [],
}

