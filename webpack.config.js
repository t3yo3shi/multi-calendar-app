const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

module.exports = () => {
  const env = dotenv.config().parsed;
  return {
    mode: "development",
    entry: {
      main: __dirname + "/src/main.tsx",
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: [/\.ts$/, /\.tsx$/],
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      modules: [__dirname + "/node_modules"],
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(env),
      }),
    ],
    devServer: {
      static: {
        directory: __dirname + "/dist",
      },
      port: 8080,
      historyApiFallback: true,
    },
  };
};
