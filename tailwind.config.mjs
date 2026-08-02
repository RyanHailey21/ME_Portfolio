/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          raised: '#111113',
          card: '#16161A',
          line: '#262629',
          subtle: '#1D1D21',
        },
        chalk: {
          DEFAULT: '#EAEAEC',
          secondary: '#9A9AA8',
          muted: '#5A5A6A',
        },
        brass: {
          DEFAULT: '#D4A843',
          light: '#E8C06A',
          dim: '#1E1810',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: () => ({
        invert: {
          css: {
            '--tw-prose-body': '#9A9AA8',
            '--tw-prose-headings': '#EAEAEC',
            '--tw-prose-links': '#D4A843',
            '--tw-prose-bold': '#EAEAEC',
            '--tw-prose-counters': '#5A5A6A',
            '--tw-prose-bullets': '#5A5A6A',
            '--tw-prose-hr': '#262629',
            '--tw-prose-quotes': '#EAEAEC',
            '--tw-prose-quote-borders': '#D4A843',
            '--tw-prose-captions': '#5A5A6A',
            '--tw-prose-code': '#EAEAEC',
            '--tw-prose-pre-code': '#9A9AA8',
            '--tw-prose-pre-bg': '#16161A',
            '--tw-prose-th-borders': '#262629',
            '--tw-prose-td-borders': '#1D1D21',
          },
        },
      }),
    },
  },
}
