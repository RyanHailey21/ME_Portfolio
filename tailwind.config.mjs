/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
      },
      colors: {
        'portfolio-blue': ' #60A5FA', 
        'portfolio-teal': ' #1cd8d8', 
        'dark': {
          DEFAULT: '#0A0A0A', // Onyx-like very dark gray
          'lighter': '#141414', // Slightly lighter, still very dark
          'card': '#1F1F1F'    // Darker card background
        }
      },
      backgroundImage: {
        'gradient-portfolio': 'linear-gradient(to right, #60a5fa, #1cd8d8)', // Will use updated colors
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #141414 100%)', // Updated with new dark colors
        'gradient-glow': 'linear-gradient(to bottom, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.2), transparent)', 
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}