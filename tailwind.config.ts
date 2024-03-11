import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rosa: '#F95FA7'
      },
    },
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    boxShadow: {
      'input-shadow': '0 4px 4px 0 rgba(0,0,0,0.25)',
    },
  },
};
export default config;
