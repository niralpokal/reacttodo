var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry:[
    "./server/dist/js/main.js"
  ],
  output:{
    publicPath: 'http://localhost:8080/js/',
    path: '/',
    filename:'main.min.js'
  },
  resolve:{
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  }
}
