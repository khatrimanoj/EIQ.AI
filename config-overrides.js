module.exports = function override(config, env) {
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  const htmlWebpackConfig = config.plugins.find((plugin) => plugin instanceof HtmlWebpackPlugin);

  if (htmlWebpackConfig != undefined) {
    htmlWebpackConfig.favicon = "./public/favicon.ico";
  } else {
    config.plugins.push(
      new htmlWebpackConfig({
        favicon: "./public/favicon.ico",
      }),
    );
  }

  return config;
}
