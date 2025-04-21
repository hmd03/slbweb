const { override } = require("customize-cra");

module.exports = override(config => {
  config.output.filename = 'static/js/[name].[contenthash:8].js';
  config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';

  const MiniCssExtractPlugin = config.plugins.find(
    p => p.constructor.name === 'MiniCssExtractPlugin'
  );
  if (MiniCssExtractPlugin) {
    MiniCssExtractPlugin.options.filename = 'static/css/[name].[contenthash:8].css';
    MiniCssExtractPlugin.options.chunkFilename = 'static/css/[name].[contenthash:8].chunk.css';
  }

  return config;
});
