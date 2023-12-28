import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '32px',
        xl: '24px',
      },
    },

    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        karantina: ['var(--font-karantina)'],
      },
      colors: {
        body: '#0A1813',
        error: '#FF5757',
        backdrop: 'rgba(1, 10, 5, 0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
