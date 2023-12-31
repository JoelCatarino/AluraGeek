/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: { rale: ['var(--font-rale)', 'sans-serif'] },
    },
    colors: {
      branco: '#ffffff',
      bblur: '#F5F5F5',
      cinza: '#a2a2a2',
      preto: '#464646',
      azul: '#2A7AE4',
    },
  },

  plugins: [],
}
