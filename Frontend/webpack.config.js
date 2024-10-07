const path = require('path');

module.exports = {
  // Webpack configuration
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Name of the bundled file
  },
  module: {
    rules: [
      // JavaScript/JSX handling
      {
        test: /\.jsx?$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS/JSX
        },
      },
      // CSS handling
      {
        test: /\.css$/, // Match CSS files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Translates CSS into CommonJS
          'postcss-loader', // Process CSS with PostCSS (for Tailwind, etc.)
        ],
      },
      // SCSS handling
      {
        test: /\.scss$/, // Match SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Handle SCSS to CSS
      },
      // Images and fonts handling
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico)$/, // Match image and font files
        use: [
          {
            loader: 'file-loader', // Use file-loader for images and fonts
            options: {
              name: '[path][name].[ext]', // Keep the original file path, name, and extension
              outputPath: 'assets/', // Output to 'assets/' folder inside 'dist'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'), // Create alias for the 'src' directory
    },
    extensions: ['.js', '.jsx'], // Automatically resolve these file extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from 'dist' folder
    },
    compress: true, // Enable gzip compression
    port: 3000, // Serve on port 3000
    historyApiFallback: true, // Support for React Router (SPA)
  },
};
