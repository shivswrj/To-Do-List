const path = require('path');

module.exports = {
  // Specify the entry point of your application
  entry: './src/index.js', // Update this to your actual entry file
  
  // Specify the output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  // Add the fallback configuration
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify")
    }
  },
  
  // Specify module rules if any
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
