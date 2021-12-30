module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'VERIFY JWT TOKENS',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'https://7hit-ecommerces.vercel.app/api' // development api
        : 'https://7hit-ecommerces.vercel.app/api', // production api
  },
};
