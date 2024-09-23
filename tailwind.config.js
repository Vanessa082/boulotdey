import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        app: {
          green: {
            200: "#9dd9ab",
            300: "#6dc680",
            500: "#0ba02c",
            800: "#044012",
            900: "#022009",
          },
          gray: {
            500: "#767f8c"
          }
        }
      },
      spacing: {
        "primary-app-width": "min(92vw, 1400px)",
      }
    },
  },
  plugins: [
    daisyui
  ],
}

