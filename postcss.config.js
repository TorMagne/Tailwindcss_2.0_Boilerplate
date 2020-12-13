const cssnano = require('cssnano');
// postcss.config.js
module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
