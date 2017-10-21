const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname,"./src/app.index.html"),
  filename: "app.index.html",
  inject: "body"
})
const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const config = {
  entry: srcDir + "/index.js",
  output:{
    path: distDir,
    filename: "app.bundle.js"
  },
  module: {
    loaders:[
      {
        test: /(\.js|\.jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/

      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]

}
module.exports = config;
