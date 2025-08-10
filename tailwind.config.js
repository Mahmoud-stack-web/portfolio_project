/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        'glass-inset': 'var(--shadow-glass-inset)',
        'glass-sm': 'var(--shadow-glass-sm)',
      },

    },
  },
  plugins: [],
};
