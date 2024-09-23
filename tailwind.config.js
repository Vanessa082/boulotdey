/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-900": "var(--primary-900)",
        "primary-800": "var(--primary-800)",
        "primary-700": "var(--primary-700)",
        "primary-600": "var(--primary-600)",
        "primary-500": "var(--primary-500)",
        "primary-400": "var(--primary-400)",
        "primary-300": "var(--primary-300)",
        "primary-200": "var(--primary-200)",
        "primary-100": "var(--primary-100)",
        "primary-50": "var(--primary-50)",

        "secondary-900": "var(--secondary-900)",
        "secondary-800": "var(--secondary-800)",
        "secondary-700": "var(--secondary-700)",
        "secondary-600": "var(--secondary-600)",
        "secondary-500": "var(--secondary-500)",
        "secondary-400": "var(--secondary-400)",
        "secondary-300": "var(--secondary-300)",
        "secondary-200": "var(--secondary-200)",
        "secondary-100": "var(--secondary-100)",
        "secondary-50": "var(--secondary-50)",

        "accent-900": "var(--accent-900)",
        "accent-800": "var(--accent-800)",
        "accent-700": "var(--accent-700)",
        "accent-600": "var(--accent-600)",
        "accent-500": "var(--accent-500)",
        "accent-400": "var(--accent-400)",
        "accent-300": "var(--accent-300)",
        "accent-200": "var(--accent-200)",
        "accent-100": "var(--accent-100)",
        "accent-50": "var(--accent-50)",

        "neutral-900": "var(--neutral-900)",
        "neutral-800": "var(--neutral-800)",
        "neutral-700": "var(--neutral-700)",
        "neutral-600": "var(--neutral-600)",
        "neutral-500": "var(--neutral-500)",
        "neutral-400": "var(--neutral-400)",
        "neutral-300": "var(--neutral-300)",
        "neutral-200": "var(--neutral-200)",
        "neutral-100": "var(--neutral-100)",
        "neutral-50": "var(--neutral-50)",

        "tertiary-900": "var(--tertiary-900)",
        "tertiary-800": "var(--tertiary-800)",
        "tertiary-700": "var(--tertiary-700)",
        "tertiary-600": "var(--tertiary-600)",
        "tertiary-500": "var(--tertiary-500)",
        "tertiary-400": "var(--tertiary-400)",
        "tertiary-300": "var(--tertiary-300)",
        "tertiary-200": "var(--tertiary-200)",
        "tertiary-100": "var(--tertiary-100)",
        "tertiary-50": "var(--tertiary-50)"
      }
    },
  },
  plugins: [],
}

