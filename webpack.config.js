// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/client/public/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

// module.exports = {
//   entry: [
//     './client/app.js'
//   ],
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/dist'
//   },

//   module: {
//     loaders: [
//       { test: /\.jsx$/,
//         loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
//         exclude: /node_modules/
//       },
//       { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] }
//     ]
//   },
//   plugins: [HTMLWebpackPluginConfig]
// }

var webpack = require('webpack');

var entry = ['./client/app.js'];
var plugins = [];
if (process.env.WEBPACK !== 'dev-server') {
  entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/app.js',
  ];
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];
};

module.exports = {
  plugins: plugins,
  entry: entry,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|server|test/,
        loaders: ['babel-loader', 'babel?presets[]=react,presets[]=es2015'],
      },
      { test: require.resolve('react'), loader: 'expose?React', },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
};
