import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-loop': 'border-loop 3s linear infinite', // Alterado para um tempo mais curto e contínuo
      },
      keyframes: {
        'border-loop': {
          '0%': {
            borderColor: 'red', 
            transform: 'scale(1)',
          },
          '50%': {
            borderColor: 'white', 
            transform: 'scale(1)', 
          },
          '100%': {
            borderColor: 'red',
            transform: 'scale(1)', 
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
