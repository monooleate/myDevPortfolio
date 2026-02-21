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
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        uni: {
          text: 'rgb(var(--color-text) / <alpha-value>)',
          textIntro: 'rgb(var(--color-text-intro) / <alpha-value>)',
          fill: 'rgb(var(--color-fill) / <alpha-value>)',
          palette: 'rgb(var(--color-palette) / <alpha-value>)',
          paletteHover: 'rgb(var(--color-palette-hover) / <alpha-value>)',
          bg: 'rgb(var(--color-main-background) / <alpha-value>)',
          border: 'rgb(var(--color-text-border) / <alpha-value>)',
          odd: 'rgb(var(--color-odd) / <alpha-value>)',
          even: 'rgb(var(--color-even) / <alpha-value>)',
          card: 'rgb(var(--color-card) / <alpha-value>)',
          cardHover: 'rgb(var(--color-card-hover) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          success: 'rgb(var(--color-success) / <alpha-value>)',
          muted: 'rgb(var(--color-muted) / <alpha-value>)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    }
  },
  plugins: [],
  darkMode: 'selector',
}
