// Application theme colors
import colors from './theme/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
