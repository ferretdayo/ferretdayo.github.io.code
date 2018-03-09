'use strict'

const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  RESAS_API_KEY: '""',
  GOOGLE_MAP_API_KEY: '""'
})
