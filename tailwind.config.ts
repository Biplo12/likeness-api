import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#131416',
        'light-blue': '#007FFF',
        'darker-bg': '#212121',
        'dark-white': '#EEEEEE',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
