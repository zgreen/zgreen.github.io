'use strict';

const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const isHot = process.argv.indexOf('--hot') !== -1;
const isProduction = process.argv.indexOf('-p') !== -1;
const paths = ['/'].concat(require('./src/posts.json'))
const plugins = [
  new webpack.DefinePlugin({
    IS_PRODUCTION: isProduction
  })
]
if (isProduction) {
	plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new StaticSiteGeneratorPlugin('app', paths, {}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	)
}

module.exports = {
  entry: {
    app: 'src/app.jsx',
    //css: 'src/core.css' // @TODO It would be nice not to have to do this.
  },
  output: {
    path: '',
    publicPath: !isHot ? '' : 'http://localhost:8080/',
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
	plugins,
  resolve: {
    root: path.resolve(__dirname),
		extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
					plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.html$/,
        loader: 'dom!html',
      },
      {
        test: /\.jpe?g$/,
        loader: 'file'
      },
			{
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      }
    ]
  },
  postcss: function(webpack) {
    const postcssPlugins = [
      postcssImport({addDependencyTo: webpack}),
      require('postcss-modules')({
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      }),
      postcssNested,
      postcssCalc,
      require('postcss-critical-css')
    ]
    return postcssPlugins
  }
};
