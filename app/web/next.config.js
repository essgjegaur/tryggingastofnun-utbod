const withTreat = require('next-treat')()
const withTM = require('next-transpile-modules')(['@island.is/ui'])

module.exports = withTreat(
  withTM(nextConfig => {
    return {
      ...nextConfig,
      reactStrictMode: true,
      assetPrefix: '/tr-web',
      basePath: '/tr-web',
    }
  }),
)
