/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    padding: {
      'pl-30': 'padding-left: 120px'
    },
    colors: {
      cream: 'rgba(255, 255, 241, 1)',
      primaryGreen: '#8E986D',
      lightGreen: '#6D8C03',
      darkGreen: '#324002',
    },
    extend: {
    },
  },
  plugins: [],
}