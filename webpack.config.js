const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  devServer: {
    proxy:[
      {
        context: ['/api'], // URL контекст
        target: 'http://api.weatherapi.com', // Целевой сервер
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Изменение пути запроса
      },
    ],
  },

  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
 
};
