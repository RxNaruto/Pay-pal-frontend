/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackn': '#2c2e2f',
        'buttonc': '#0070ba'
      },
    },
  },
  plugins: [],
}

