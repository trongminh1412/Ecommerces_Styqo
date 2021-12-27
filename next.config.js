module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: "VERIFY JWT TOKENS",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api" // development api
        : "http://localhost:4000/api", // production api
  },
};
