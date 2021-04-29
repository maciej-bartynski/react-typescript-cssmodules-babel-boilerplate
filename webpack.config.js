const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");

module.exports = {


  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    path: require("path").join(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    port: 3000,
    contentBase: "./dist",
    historyApiFallback: true
  },



  resolve: { extensions: [".js", ".ts", ".tsx"] },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtracPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false
            }
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtracPlugin()
  ],
};
