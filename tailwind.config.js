/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue-500-blur': '0 10px 15px -10px rgba(59, 130, 246, 0.05), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
      }
    },
  },
  plugins: [require('daisyui')],
}
