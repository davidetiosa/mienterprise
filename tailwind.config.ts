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
          DEFAULT: '#2d7a3e',
          dark: '#1d5c2e',
          light: '#3d9a4e',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
        accent: {
          DEFAULT: '#fbbf24',
          light: '#fcd34d',
        },
      },
    },
  },
  plugins: [],
}
export default config
