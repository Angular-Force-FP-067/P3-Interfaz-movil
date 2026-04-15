const path = require('path');

module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    // Ensure Babel parser always resolves this project's config file.
    requireConfigFile: true,
    babelOptions: {
      configFile: path.resolve(__dirname, 'babel.config.js'),
    },
  },
};
