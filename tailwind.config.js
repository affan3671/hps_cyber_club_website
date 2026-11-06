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
          card: 'rgba(11, 21, 40, 0.75)',
          border: 'rgba(0, 229, 255, 0.2)',
          borderHover: 'rgba(0, 229, 255, 0.6)',
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
        display: ['"Space Grotesk"', 'Orbitron', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -3px rgba(0, 229, 255, 0.45)',
        'glow-cyan-lg': '0 0 35px 2px rgba(0, 229, 255, 0.6)',
        'glow-green': '0 0 20px -3px rgba(57, 255, 136, 0.45)',
        'glow-purple': '0 0 20px -3px rgba(139, 92, 246, 0.45)',
        'glow-danger': '0 0 20px -3px rgba(239, 68, 68, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}

