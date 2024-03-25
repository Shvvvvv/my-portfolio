/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,vue}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#EEEEEE',
        secondaryColor: '#31363F',
        fontColor: '#222831',
        highlightColor: '#76ABAE'
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'in-slide-up': {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 0.5 }
        },
        'out-slide-down': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(50%)', opacity: 0 }
        }
      },
      animation: {
        'slide-up': 'slide-up 0.8s ease-out',
        'out-slide-down': 'out-slide-down 0.8s ease-out',
        'in-slide-up': 'in-slide-up 0.8s ease-out'
      }
    }
  },
  plugins: []
}
