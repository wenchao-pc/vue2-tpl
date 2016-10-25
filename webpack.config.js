var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].[hash].js"
	},
	resolve: {
		extensions: ["", ".js", ".vue"]
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: "vue"
		}, {
			test: /\.js$/,
			loader: "babel",
			include: path.resolve(__dirname, "./src"),
			exclude: /node_modules/
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract("css!less")
		}]
	},
	vue: {
		loaders: {
			css: ExtractTextPlugin.extract("css"),
			less: ExtractTextPlugin.extract("css!less")
		},
		postcss: [
			require('autoprefixer')({
				browsers: ['last 2 versions']
			})
		]
	},
	plugins: [
		new ExtractTextPlugin("./css/style.[contenthash].css"),
		new HtmlWebpackPlugin({
			template: "./index.html",
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		})
	]
}

module.exports = config;