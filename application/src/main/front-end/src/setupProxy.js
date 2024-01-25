const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) { // Spring boot & React 
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};