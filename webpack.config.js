var path = require('path');
// 3100101161
module.exports = {
  entry: './src/main.js',
  output: { path: __dirname + "/dist/", filename: 'bundle.js' },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
 externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        'immutable' : 'Immutable',
        'redux' : 'Redux' ,
        'react-redux' : 'ReactRedux'
    },
};