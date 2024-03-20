/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      // maxWidth:{
      //   container: "1400px"
      // },
    },
  },
  plugins: [require('flowbite/plugin')],
}
