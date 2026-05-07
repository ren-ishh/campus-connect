/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0C",
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
        neon: {
          cyan: "#39FF14",
          magenta: "#FF6B00",
          violet: "#6A0DAD",
        }
      },
      backdropBlur: {
        'glass': '40px',
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      backgroundImage: {
        'aurora': "linear-gradient(45deg, #0A0A0C 0%, #001f3f 25%, #39003f 50%, #0A0A0C 100%)",
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, filter: 'blur(20px)' },
          '50%': { opacity: 0.8, filter: 'blur(40px)' },
        }
      }
    },
  },
  plugins: [],
}
