/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./stitch_design/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        canvas: '#FAFAFA',
        porcelain: '#F5F6F8',
        accent: {
          charcoal: '#0F1012',
          subtle: '#626671',
          border: '#EAECEF',
        }
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
