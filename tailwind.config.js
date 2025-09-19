module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm brown for professional grounding
        primary: {
          50: "#F5F1ED", // brown-50
          100: "#EBE3DB", // brown-100
          200: "#D7C7B7", // brown-200
          300: "#C3AB93", // brown-300
          400: "#AF8F6F", // brown-400
          500: "#8B4513", // brown-500
          600: "#7D3E11", // brown-600
          700: "#6F370F", // brown-700
          800: "#61300D", // brown-800
          900: "#53290B", // brown-900
          DEFAULT: "#8B4513", // brown-500
        },
        // Secondary Colors - Rich chocolate brown for depth
        secondary: {
          50: "#F4F2F0", // dark-brown-50
          100: "#E9E5E1", // dark-brown-100
          200: "#D3CAC3", // dark-brown-200
          300: "#BDB0A5", // dark-brown-300
          400: "#A79587", // dark-brown-400
          500: "#654321", // dark-brown-500
          600: "#5B3C1E", // dark-brown-600
          700: "#51351B", // dark-brown-700
          800: "#472E18", // dark-brown-800
          900: "#3D2715", // dark-brown-900
          DEFAULT: "#654321", // dark-brown-500
        },
        // Accent Colors - Golden brown for highlights
        accent: {
          50: "#F8F4F2", // sienna-50
          100: "#F1E9E5", // sienna-100
          200: "#E3D3CB", // sienna-200
          300: "#D5BDB1", // sienna-300
          400: "#C7A797", // sienna-400
          500: "#A0522D", // sienna-500
          600: "#904A29", // sienna-600
          700: "#804225", // sienna-700
          800: "#703A21", // sienna-800
          900: "#60321D", // sienna-900
          DEFAULT: "#A0522D", // sienna-500
        },
        // Background Colors
        background: "#FFFEF7", // warm-white
        surface: "#FEFEFE", // off-white
        // Text Colors
        text: {
          primary: "#2D1810", // dark-brown-text
          secondary: "#6B5B4F", // medium-brown-text
        },
        // Status Colors
        success: {
          50: "#F0FFF0", // forest-green-50
          100: "#C6F6D5", // forest-green-100
          500: "#228B22", // forest-green
          DEFAULT: "#228B22", // forest-green
        },
        warning: {
          50: "#FFFACD", // goldenrod-50
          100: "#FFF8DC", // goldenrod-100
          500: "#DAA520", // goldenrod
          DEFAULT: "#DAA520", // goldenrod
        },
        error: {
          50: "#FFE4E1", // fire-brick-50
          100: "#FFC0CB", // fire-brick-100
          500: "#B22222", // fire-brick
          DEFAULT: "#B22222", // fire-brick
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'therapeutic': '0 4px 12px rgba(139, 69, 19, 0.1)',
        'card': '0 2px 8px rgba(139, 69, 19, 0.08)',
        'hover': '0 6px 16px rgba(139, 69, 19, 0.12)',
        'soft': '0 4px 12px rgba(139, 69, 19, 0.1)',
      },
      borderRadius: {
        'therapeutic': '8px',
      },
      transitionDuration: {
        'gentle': '300ms',
        'content': '400ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'gentle-bounce': 'gentleBounce 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      backgroundImage: {
        'workspace': "url('../assets/images/Gemini_Generated_Image_ji5e29ji5e29ji5e-1758032222751.png')",
      },
    },
  },
  plugins: [],
}