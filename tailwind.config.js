/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0C12',
          darker: '#06080D',
          card: '#111620',
          'card-alt': '#0D1520',
          border: '#1E2A3A',
          gold: '#C9943A',
          'gold-light': '#E8B84B',
          'gold-dim': '#7A5A20',
          parchment: '#DEC991',
          'parchment-dim': '#A89060',
          red: '#7D2128',
          'red-light': '#A02830',
          text: '#EAD9BE',
          'text-muted': '#7A8BA3',
          'text-dim': '#3A4558',
        },
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
