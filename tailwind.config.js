/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}', // Procura em todos os arquivos HTML e JS
    '!./node_modules/**/*', // Exclui a pasta node_modules
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
}
