import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: 'rgb(0,0,0)',
      red: 'rgb(187,0,0)',
      green: 'rgb(0,187,0)',
      yellow: 'rgb(255,255,85)',
      blue: 'rgb(0,0,187)',
      magenta: 'rgb(187,0,187)',
      cyan: 'rgb(0,187,187)',
      white: 'rgb(191,191,191)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-mesloLGS)'],
      },
    },
  },
  plugins: [],
};
export default config;
