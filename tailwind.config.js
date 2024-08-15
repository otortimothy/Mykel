/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/Images/Rectangle.png')"
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//     colors: {
//       customBlue: 'rgb(49, 60, 212)',
//     },
//   },
// },
// plugins: [],
// };
