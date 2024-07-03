/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1180px'
      },
      colors: {
        uni: {
          text: 'rgb(var(--color-text) / <alpha-value>)',
          textIntro: 'rgb(var(--color-text-intro) / <alpha-value>)',
          fill: 'rgb(var(--color-fill) / <alpha-value>)',
          palette: 'rgb(var(--color-palette) / <alpha-value>)',
          bg: 'rgb(var(--color-main-background) / <alpha-value>)',
          border: 'rgb(var(--color-text-border) / <alpha-value>)',
          odd: 'rgb(var(--color-odd) / <alpha-value>)', 
          even: 'rgb(var(--color-even) / <alpha-value>)',
        }
      },
    }
  },
  plugins: [],

  darkMode: 'selector',
}

