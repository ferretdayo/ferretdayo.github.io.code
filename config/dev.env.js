'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  RESAS_API_KEY: '"igDIvsWS3g9gQtO43BbUvCs6df4O2mzZy5emV8on"',
  GOOGLE_MAP_API_KEY: '"AIzaSyDzizSwnP7zltlheEKwIAMyL38ixBYfpf0"'
})
