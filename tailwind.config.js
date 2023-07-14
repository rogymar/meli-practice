/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#ffe600',
        background: '#eeeeee',
        blueDetails: '#3483FA',
        lightGray: '#999999',
        medGray: '#666666',
        darkGray: '#333333',

      },
    },
  },
  plugins: [],
}
