import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		// Generate an external CSS file with hash in the filename
		new ExtractTextPlugin('[name].[contenthash].css'),

		// Hash the files using MD5 so that names changed when
		// the content changes
		new WebpackMd5Hash(),

		// CommonsChunkPlugin to create separate bundle of vendor
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),

		// Create HTML file with bundled JS
		// So we can remove `bundle.js` from src/index.html
		// it will generate it

		// Every property here will be available in `index.html`
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDocType: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			trackJSToken: 'e84d7a4c824349ce86c9a19b2beac8b7'
		}),

		// Eliminate duplicate packages
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
		]
	}
}
