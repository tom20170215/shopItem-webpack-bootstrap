const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		index: './src/js/index.js',
		danpin: './src/js/danpin.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ["css-loader","postcss-loader"]
			})
		}, {
			test: /\.(jpg|svg|gif|png)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 1000,
					name :'images/[name].[ext]',
					publicPath:'../'
				}
			}]
		}, {
			test: /\.html$/,
			use: 'html-loader'
		}, {
			test: require.resolve('jquery'),
			use: [{
				loader: 'expose-loader',
				options: 'jQuery'
			}, {
				loader: 'expose-loader',
				options: '$'
			}]
		},{
			test:/\.scss$/,
			use:[
				{
					loader:'style-loader'
				},
				{
					loader:'css-loader'
				},
				{
					loader:'postcss-loader'
				},
				{
					loader:'sass-loader'
				}
			]
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject:true,
			chunks: ['index','common'],
			minify:{
				removeAttributeQuotes:true, //移出属性的引号
				collapseWhitespace:true,
				removeComments:true
			},
			favicon:'./src/images/bitbug_favicon.ico',
			hash:true
		}),
		new HtmlWebpackPlugin({
			template: './src/danpin.html',
			filename: 'danpin.html',
			inject:true,
			chunks: ['danpin','common'],
			minify:{
				removeAttributeQuotes:true,
				collapseWhitespace:true,
				removeComments:true
			},
			favicon:'./src/images/bitbug_favicon.ico',
			hash:true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common",
			chunks: [
				'index',
				'danpin'
			]

		}),
		new ExtractTextPlugin({
			filename : 'css/[name].css',
			allChunks: true 
		})
	]

};