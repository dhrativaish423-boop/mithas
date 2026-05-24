import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        hindi: ['Mukta', 'sans-serif'],
      },
      colors: {
        background: '#FFF7EC',
        foreground: '#4B2E20',
        brand: {
          maroon: '#7B1E2B',
          gold: '#E89B1E',
          green: '#A7C957',
          brown: '#4B2E20',
        },
        primary: {
          DEFAULT: '#E89B1E',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#7B1E2B',
          foreground: '#FFF7EC',
        },
        muted: {
          DEFAULT: '#F5E6D3',
          foreground: '#7B1E2B',
        },
        accent: {
          DEFAULT: '#A7C957',
          foreground: '#FFFFFF',
        },
        border: 'rgba(123, 30, 43, 0.15)',
        input: 'rgba(123, 30, 43, 0.05)',
        ring: '#E89B1E',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
