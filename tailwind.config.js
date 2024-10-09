import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#007B5E",
          "secondary": "#ffaa00",
          "accent": "#18191c",
          "neutral": "#ff00ff",
          "base-100": "#ffffff",
          "info": "#F1F2F4",
          "success": "#00ff00",
          "warning": "#E05151",
          "error": "#F3B9B9",
        },
      },
    ],
  },
  theme: {
    backgroundImage: {
      "hero-banner": "url('/assets/landing-page/bl.jpg')",
    },
    extend: {
      colors: {
        app: {
          green: {
            50: "#E7F6EA",
            200: "#9dd9ab",
            300: "#6dc680",
            500: "#007B5E",
            800: "#044012",
            900: "#022009",
          },
          gray: {
            0o0: "#FFFFFF", // Updated to correct the color code
            50: "#F1F2F4",
            200: "#C8CCD1",
            300: "#ADB2BA", // Corrected to have the proper format
            500: "#767f8c",
            600: "#5E6670",
            900: "#18191C",
          }
        },
      },
      width: {
        "btn-width": "10rem"
      },
      spacing: {
        "primary-app-width": "min(92vw, 1400px)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
};
