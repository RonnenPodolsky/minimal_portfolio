module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    colors: {
      'background': '#fef6e4',
      'button': '#f582ae',
      'headline': '#001858',
      'paragraph': '#172c66',
      'button-text': '#001858',
      'secondary': '#8bd3dd',
      'main': '#f3d2c1',
      'card-text': '#fef6e4',
      'card-headline': '#fffffe',
      'card-bg': '#001858',
      'card-tag-bg': '#fef6e4',
      'card-highlight': '#f582ae',
      'year-bg': '#f3d2c1'


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
