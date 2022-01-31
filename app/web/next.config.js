const withTreat = require('next-treat')()
const withTM = require('next-transpile-modules')(['@island.is/ui'])

module.exports = withTreat(
  withTM({
    reactStrictMode: true,
    assetPrefix: '/tr-web',
    basePath: '/tr-web',
  }),
)
