const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const webpack = require('webpack');

module.exports = {
  // Mode
  mode: 'development',

  // Entry point of your application
  entry: './src/index.jsx',

  // Output configuration for Webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/tos-challenge/', // Set the publicPath to match the subpath
  },

  // Devtool for source maps
  devtool: 'inline-source-map',

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from the public directory
      publicPath: '/tos-challenge/', // Serve static files at the subpath
    },
    historyApiFallback: {
      index: '/tos-challenge/index.html', // Serve index.html for all routes
    },
    open: true, // Open the browser after server had been started
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
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
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
        // Define other environment variables if needed
      }),
    new HotModuleReplacementPlugin(),
  ],

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Add '.json' to the array
    alias: {
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
    },
  },
};