const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
// export default {
module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    screens: {
      'smaller': '350px',
      // formerly 450

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'monospace', 'Space Mono', 'SFMono-Regular',],
      'cursive': ['Dancing Script', 'cursive',],
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      notbold: '620',
      almostbold: '650',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },

    animation: {
      loader: 'loader 0.6s infinite alternate',
    },

    keyframes: {
      loader: {
        to: {
          opacity: 0.1,
          transform: 'translate3d(0, -1rem, 0)',
        },
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
});

// Made with 💙 by Stephen Adeniji
// https://stephen-adeniji.netlify.app/