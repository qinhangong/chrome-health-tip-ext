const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'production',
  entry: {
    pop: './src/pop/index.js',
    content: './src/content/index.js',
    background: './src/background/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            },
          },
        ],
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
  ]
};
