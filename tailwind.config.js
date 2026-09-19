/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#FAFAFA',
          dark: '#0A0A0A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#121212',
          'light-elevated': '#F4F4F5',
          'dark-elevated': '#18181B',
        },
        borderline: {
          light: '#E5E7EB',
          dark: '#27272A',
        },
        ink: {
          primary: {
            light: '#111111',
            dark: '#EDEDED',
          },
          secondary: {
            light: '#6B7280',
            dark: '#A1A1AA',
          },
          muted: {
            light: '#9CA3AF',
            dark: '#71717A',
          },
        },
        accent: {
          DEFAULT: '#3B82F6', // calm blue
          hover: '#2563EB',
          subtle: {
            light: '#EFF6FF',
            dark: 'rgba(59, 130, 246, 0.12)',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      transitionTimingFunction: {
        'apple-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'subtle-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
