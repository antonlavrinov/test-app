const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    fallbacks: {
      // image: '/static/images/fallback.png',
      document: '/offline.page.js',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});