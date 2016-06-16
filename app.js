var webpack = require('webpack')
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var app = express();

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static('./public/'));



app.listen(8080)
