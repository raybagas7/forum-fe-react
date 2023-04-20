/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    minHeight: {
      'half-screen': '50vh',
      screen: '100vh',
    },
    extend: {
      boxShadow: {
        behind: '0 0 7px 2px',
      }
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-animation-delay')],
};
