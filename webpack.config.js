// @ts-check

const path = require('path');

/**
 * @type { import("webpack").Configuration }
 */
module.exports = {	
	mode: 'development',
	entry: './src/index.ts',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	}
}