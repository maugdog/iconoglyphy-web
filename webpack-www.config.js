/*module.exports = {
  context: '/',
  target: 'node'
};*/

var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'src/www/js/index.js'),

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }

}
