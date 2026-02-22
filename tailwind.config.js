/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0E14',
        accent: {
          blue: '#00D2FF',
          green: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
