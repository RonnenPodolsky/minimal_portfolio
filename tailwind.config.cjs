module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    colors: {
      'background': '#F2F1ED',
      'main': '#EDCDBE',
      'headline': '#4F4F4B',
      'paragraph': '#4F4F4B',
      'button-text': '#F2F1ED',
      'card-bg': '#B8CDD6',
      'card-tag-bg': '#EDCDBE',
      'button': '#CCA9BC',
      'nav-highligt': '#997F8D',
      'secondary': '#CCA9BC',
      'year-bg': '#EDCDBE',
      'card-text': '#4F4F4B',
      'card-headline': '#4F4F4B',
      'card-highlight': '#EDCDBE',
      'white': '#FFFFFF',
      'button-blue': 'B8CDD6'

    },

    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
    },
  },
  plugins: [],
};
// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
