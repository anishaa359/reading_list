/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './reading_list/src/index.html',
    './reading_list/src/*.{js,ts,jsx,tsx}',
    './reading_list/src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
