[Базовая настройка webpack]()<br>


```javaScript
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  watch: true,
  devtool: "source-map",
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
    
  },
  // Короче ставил таким образом минификацию css файла, и после этого у меня  переставал сжиматься js файл
  // optimization: {  
  //   minimize: true,
  //   minimizer: [
  //     new CssMinimizerPlugin({
  //     }),

  //   ],
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),
    new CssMinimizerPlugin(), // я закоментил часть выше и просто подключил тут плагин, все заработало и css сжимается и js. В чем была проблема я хз честно. вебпак сложная штука, но хотя бы решение нашел какое-то
    new CleanWebpackPlugin(),
  ],
};
```