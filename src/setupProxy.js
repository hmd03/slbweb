const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://port-0-server-dihik2mlj9ust62.sel4.cloudtype.app',
      changeOrigin: true,
    })
  );
};
