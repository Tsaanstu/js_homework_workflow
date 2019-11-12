const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./public/index.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './public/components'),
      Modules: path.resolve(__dirname, './public/modules'),
      Styles: path.resolve(__dirname, './public/style'),
      Controllers: path.resolve(__dirname, './public/controllers'),
      Views: path.resolve(__dirname, './public/views'),
      Router: path.resolve(__dirname, './public/router')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
