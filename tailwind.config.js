/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Athletic Precision Brand Colors
        'primary-navy': '#1a1d29',
        'primary-blue': '#00d4ff',
        'primary-white': '#ffffff',
        'accent-orange': '#ff6b35',
        'accent-green': '#00e676',
        'neutral-gray': '#f8f9fa',
        'border-gray': '#e9ecef',
        'text-gray': '#6c757d',
        
        // Legacy Reppo Brand Colors (for compatibility)
        primary: '#FF3B30',        // Electric Coral
        secondary: '#2979FF',      // Gradient Blue
        background: '#0D0D0D',     // Charcoal Black
        'card-bg': '#1A1A1A',     // Deep Gray for cards/panels
        'text-primary': '#FFFFFF',    // White text
        'text-secondary': '#D1D1D1',  // Soft gray text
        
        // Additional grays for app preview
        'reppo-black': '#000000',
        'reppo-red': '#FF3B30',
        'reppo-blue': '#2979FF',
        'reppo-gray-300': '#D1D5DB',
        'reppo-gray-400': '#9CA3AF',
        'reppo-gray-600': '#4B5563',
        'reppo-gray-800': '#1F2937',
        'reppo-gray-900': '#111827',
        
        // Legacy aliases for compatibility
        accent: '#2979FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        // Athletic Precision gradients
        'gradient-athletic': 'linear-gradient(135deg, #00d4ff 0%, #ff6b35 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1a1d29 0%, #2a2d39 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)',
        
        // Legacy gradients (for compatibility)
        'gradient-primary': 'linear-gradient(135deg, #FF3B30 0%, #2979FF 100%)',
        'gradient-coral': 'linear-gradient(135deg, #FF3B30 0%, #FF6B30 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(255,59,48,0.1) 0%, rgba(41,121,255,0.1) 100%)',
        'gradient-radial-coral': 'radial-gradient(circle, rgba(255,59,48,0.2) 0%, transparent 70%)',
        'gradient-radial-blue': 'radial-gradient(circle, rgba(41,121,255,0.2) 0%, transparent 70%)',
        'spotlight': 'radial-gradient(circle at 50% 50%, rgba(255,59,48,0.1) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-coral': 'pulseCoral 2s ease-in-out infinite',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
        'pulse-athletic': 'pulseAthletic 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseCoral: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(255, 59, 48, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(255, 59, 48, 0)' 
          },
        },
        pulseBlue: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(41, 121, 255, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(41, 121, 255, 0)' 
          },
        },
        pulseAthletic: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(0, 212, 255, 0)' 
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'athletic': '0 4px 12px rgba(26, 29, 41, 0.1)',
        'athletic-lg': '0 8px 24px rgba(26, 29, 41, 0.15)',
        'athletic-xl': '0 12px 32px rgba(26, 29, 41, 0.2)',
        'blue-glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'orange-glow': '0 0 20px rgba(255, 107, 53, 0.3)',
      },
      borderRadius: {
        'athletic': '8px',
        'athletic-lg': '12px',
        'athletic-xl': '16px',
      },
    },
  },
  plugins: [],
} 