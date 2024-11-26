/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navBar-text': '#72DDD1',
       'background': '#073f48',
        'btn-color': "#09877e",
        'service-color': '#09a896',
      },
    },
  },
  plugins: [],
}

