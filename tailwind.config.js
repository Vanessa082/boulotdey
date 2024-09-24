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
            500: "#007B5E",
            800: "#044012",
            900: "#022009",
          },
          gray: {
            50: "#F1F2F4",
            200: "#C8CCD1",
            300: "ADB2BA",
            500: "#767f8c",
            600: "#5E6670",
            900: "#18191C",
          }
        },
        
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

