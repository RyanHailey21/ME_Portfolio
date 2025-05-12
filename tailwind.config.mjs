/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
      },
      colors: {
        'portfolio-blue': '#3B82F6',
        'portfolio-purple': '#8B5CF6',
        'dark': {
          DEFAULT: '#0A0F1C',
          'lighter': '#1E293B',
          'card': '#1F2937'
        }
      },
      backgroundImage: {
        'gradient-portfolio': 'linear-gradient(to right, #3B82F6, #8B5CF6)',
        'gradient-dark': 'linear-gradient(135deg, #0A0F1C 0%, #1E293B 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 25%, transparent 50%)',
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