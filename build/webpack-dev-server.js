const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.client.config');
const logger = require('../server/lib/logger');

config.mode = 'development';
config.entry = path.join(__dirname, '../client/app.jsx');
config.output = {
  publicPath: '/app/',
  filename: 'client.js'
};

const options = {
 publicPath: 'https://bfd-admin.appliance-trial.com/app/',
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  },

  quiet: false,
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },

  stats: { colors: true },
  headers: { 'Access-Control-Allow-Origin': '*' },
  disableHostCheck: true,   // That solved it
};

new WebpackDevServer(webpack(config), options)
  .listen(3001, '0.0.0.0',
    (err) => {
      if (err) {
        logger.error(err);
      } else {
        logger.info('Webpack proxy listening on: https://bfd-admin.appliance-trial.com');

        // Start the actual webserver.
        require('../index.dev');
      }
    });
