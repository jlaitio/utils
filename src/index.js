// eslint-disable-next-line no-underscore-dangle
if (!global._babelPolyfill) {
  // eslint-disable-next-line global-require
  require('@babel/polyfill')
}
// eslint-disable-next-line global-require
// require('source-map-support/register')

const common = require('./common')
const constants = require('./constants')
const data = require('./data')
const error = require('./error')
const fetch = require('./fetch')
const fs = require('./fs')
const ip = require('./ip')
const lang = require('./lang')
const logging = require('./logging')
const logic = require('./logic')
const path = require('./path')
const string = require('./string')

module.exports = {
  ...common,
  ...constants,
  ...data,
  ...error,
  ...fetch,
  ...fs,
  ...ip,
  ...lang,
  ...logging,
  ...logic,
  ...path,
  ...string
}
