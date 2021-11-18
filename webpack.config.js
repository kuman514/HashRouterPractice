const path = require('path');

module.exports = {
  entry: './js/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  mode: 'development'
};
