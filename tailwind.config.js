module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border': 'var(--border)',
        accent: 'var(--accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};