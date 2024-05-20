import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
