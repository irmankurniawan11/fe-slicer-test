/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red' : '#F5333F',
        'brand-red-600' : '#F94355',
        'brand-grey' : '#999',
        'brand-grey-100' : '#F1F1F1',
        'brand-grey-200' : '#E6E6E6',
        'brand-grey-600' : '#808080',
        'brand-grey-700' : '#666',
        'brand-grey-800' : '#4D4D4D',
        'brand-grey-900' : '#333',
        'brand-grey-1000' : '#1A1A1A',
        'brand-grey-black' : '#000',
        'brand-grey-white' : '#FFF',
        'brand-slate-200' : '#C5C7D0',
        'brand-slate' : '#1A202C',
        'brand-navy': '#012846'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
