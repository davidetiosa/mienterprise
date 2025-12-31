import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          dark: '#5D2E0F',
          light: '#A0522D',
        },
        secondary: {
          DEFAULT: '#D2691E',
          dark: '#B8531A',
        },
        accent: {
          DEFAULT: '#CD853F',
          light: '#DEB887',
        },
      },
    },
  },
  plugins: [],
}
export default config
