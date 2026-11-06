/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050B14',
          surface: '#0B1528',
          elevated: '#111F38',
          border: '#1E293B',
          cyan: '#00E5FF',
          green: '#39FF88',
          purple: '#8B5CF6',
          text: '#E2E8F0',
          muted: '#94A3B8',
          danger: '#EF4444',
          warning: '#F59E0B',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
      },
    },
  },
  plugins: [],
}
