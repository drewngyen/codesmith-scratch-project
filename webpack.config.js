const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: "/build",
    proxy: {
      '/api/leaders': 'http://localhost:3000'
    }
  },
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.scss?/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  
};
