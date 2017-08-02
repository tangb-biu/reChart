var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpack = require('inline-manifest-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log("The current env is: ", isPro ? 'production' : 'development');

var plugins = [
	new ExtractTextPlugin('styles.css'),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		minChunks: function(module) {
			// 提取node_modules 中的公共代码
			return module.context && module.context.indexOf('node_modules') !== -1
		} 
	}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify(nodeEnv)
		}
	}),
	new HtmlWebpackPlugin({
		filename: `${__dirname}/index.html`,
      	template: `${__dirname}/index.html`,
      	inject: true
	}),
	new InlineManifestWebpack()
]

var app = ['./index']

if (isPro) {
	plugins.push(
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			comments: false,
			ie8: true
		})
	)
} else {
	app.unshift('react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:3011', 'webpack/hot/only-dev-server')
	plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	)
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	devtool: isPro ? 'source-map' : 'inline-source-map',
	entry: {
		app: app
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build'),
		publicPath: isPro ? './build' : '/build',
		chunkFilename: '[name].js'
	},
	plugins,

	resolve: {
		extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.join(__dirname, 'src')
		],
		alias: {
			
		}
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'less-loader', 'postcss-loader']
				})
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1000,
						name: 'file/[md5:hash:base64:10].[ext]'
					}
				}]
			}
		]
	},
	devServer: {
		hot: true,
		compress: true,
		port: 3011,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname),
		publicPath: '/build',
		stats: {
			modules: false,
			chunks: false
		}
	}
}

