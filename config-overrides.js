const { override } = require("customize-cra");

module.exports = override((config) => {
  config.output.filename = 'static/js/[name].[hash:8].js';
  config.output.chunkFilename = 'static/js/[name].[hash:8].chunk.js';
  return config;
});
