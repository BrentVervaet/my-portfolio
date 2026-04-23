/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind v4 uses CSS-based configuration
  // Font configuration is in globals.css under @theme
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
};
