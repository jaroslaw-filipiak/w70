import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    fontSize,
    screens,
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        '2xl': '96.25rem',
        // => @media (min-width: 1536px) { ... }

        '3xl': '107.5rem',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
