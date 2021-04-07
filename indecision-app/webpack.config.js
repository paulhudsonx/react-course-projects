// entry -> output
const path = require('path');

console.log(`here`);
console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,  // Make s optional - supports css and scss files
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },

  devtool: "eval-cheap-module-source-map", // Allows original source file line numbers in Webpack debugger window
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8081
  }
  //devtool: "cheap-module-eval-source-map"
};
