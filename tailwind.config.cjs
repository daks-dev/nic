const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,ts,js}',
    './node_modules/flowbite-svelte/**/*.{svelte,html,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('daks-svelte/assets/tailwindcss/presets/font-family.cjs'),
    require('daks-svelte/assets/tailwindcss/presets/common.cjs')
  ],

  theme: {
    extend: {
      colors: {
        primary: colors.slate
      },
      backgroundImage: {
        'loading-data': 'url(daks-svelte/assets/icons/spinners/blocks-scale.svg)'
      }
    }
  },

  plugins: [
    require('flowbite/plugin')
  ]
};
