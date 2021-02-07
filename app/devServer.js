/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const { createServer } = require('https');
const { readFileSync } = require('fs');

const devProxy = {
  '/api': {
    target: process.env.API_PROXY_TARGET,
    changeOrigin: true,
    pathRewrite: {
      '^/api': process.env.API_PROXY_PATH,
    },
  },
};

const httpsOptions = {
  key: readFileSync('./.certificates/localhost.key'),
  cert: readFileSync('./.certificates/localhost.crt'),
};

const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.ENVIRONMENT_NAME;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if (dev && devProxy) {
      const { createProxyMiddleware } = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(function (context) {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    createServer(httpsOptions, server).listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
