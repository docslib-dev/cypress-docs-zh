// tailwind-plugin.js
module.exports = function(context, options) {
  return {
    name: 'docusaurus-tailwindcss',
    configurePostCss(postcssOptions) {
      // Appends TailwindCSS and AutoPrefixer.
      postcssOptions.plugins.push(require('tailwindcss'))
      postcssOptions.plugins.push(require('autoprefixer'))
      return postcssOptions
    },
  };
}; 