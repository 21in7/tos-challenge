const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.jsx',

  // Output configuration for Webpack
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/tos-challenge',
  },

  // Define how different file types are processed
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders here for other file types (e.g., images, fonts)
    ],
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  // Development server configuration
  devServer: {
    static: './build',
    hot: true,
    proxy: {
      '/api': 'http://localhost:3001', // Proxy requests to /api to the backend server
    },
  },

  // Enable source maps for debugging
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('/tos-challenge'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/icons', to: 'icons' },
        { from: 'public/json', to: 'json' },
        { from: 'public/_redirects', to: './' }
      ],
    })
  ],

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Add '.json' to the array
    alias: {
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
    },
  },
};