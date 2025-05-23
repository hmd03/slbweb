const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            //target: 'https://slbmaster3.cafe24.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/uploads',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            //target: 'https://slbmaster3.cafe24.com',
            changeOrigin: true,
        })
    );
};
