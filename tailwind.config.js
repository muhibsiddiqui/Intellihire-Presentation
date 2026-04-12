/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040810',
          900: '#060b18',
          800: '#0d1527',
          700: '#111b2e',
          600: '#152038',
          500: '#1e2d4a',
        },
        brand: {
          50: '#e8f4fd',
          100: '#b8dcf8',
          200: '#88c4f3',
          300: '#58acee',
          400: '#2f97f7',
          500: '#1a7ad8',
          600: '#1562b0',
          700: '#0f4a88',
          800: '#0a3260',
          900: '#051a38',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
