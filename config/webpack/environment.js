const { environment } = require('@rails/webpacker')
// const erb = require('./loaders/erb')

const webpack = require('webpack')

// Preventing Babel from transpiling NodeModules packages
environment.loaders.delete('nodeModules')

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Rails: '@rails/ujs'
}))

// environment.loaders.prepend('erb', erb)
module.exports = environment
