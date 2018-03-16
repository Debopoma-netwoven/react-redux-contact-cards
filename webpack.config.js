const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/app/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app/[name].js'
    },
  devtool: "#eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:  /\.css$/,
                loader:  'style-loader'
              }, {
                test:  /\.css$/,
                loader:  'css-loader'
               
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              },
              {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
              },
              {
                test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                loader: 'file-loader'
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ hash: true, template: './src/index.html' }),
    ],
};