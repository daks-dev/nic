const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,ts,js}',
    './node_modules/flowbite-svelte/**/*.{svelte,html,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('daks-svelte/tailwindcss/presets/font-family.cjs'),
    require('daks-svelte/tailwindcss/presets/common.cjs')
  ],

  theme: {
    extend: {
      colors: {
        primary: colors.slate
      }
    }
  },

  plugins: [
    require('flowbite/plugin')
  ]
};
