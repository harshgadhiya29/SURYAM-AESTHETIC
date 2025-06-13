/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D3B272',
          light: '#E6D5AD',
          dark: '#B69550',
          50: '#FAF6ED',
          100: '#F1E9D5',
          200: '#E6D5AD',
          300: '#DAC285',
          400: '#D3B272',
          500: '#B69550',
          600: '#997D44',
          700: '#7C6437',
          800: '#5F4C2A',
          900: '#42341D'
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          off: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E6E6E6',
          300: '#D1D1D1'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(211, 178, 114, 0.1)',
        'medium': '0 8px 30px rgba(211, 178, 114, 0.15)',
        'strong': '0 10px 40px rgba(211, 178, 114, 0.2)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-gentle': 'pulseGentle 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        }
      }
    },
  },
  plugins: [],
};