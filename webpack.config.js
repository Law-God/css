var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
	
	entry :  {
		bundle : "./index.js",
		lib : ["react","react-dom"]
	},

	output : {
		path : "./dist",
		filename : "[name][chunkhash:8].js",
		//将entry中lib单独打包一个lib.js中
		chunkFilename : "[name][chunkhash:8].js"
	},

	module : {
		loaders : [
			{
				test : /\.js$/,
				loaders : ["babel"],
				exclude : /node_modules/
			},
            {
			    test: /\.(less|css)$/,
			    loader:  ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
			}
		]
	},
	resolve : {
		alias : {
			bundlecss : path.join(__dirname,"./src/css/bundle.less")
		}
	},
	plugins: [
    	new ExtractTextPlugin("[name][contenthash:8].css"),
    	new webpack.optimize.CommonsChunkPlugin({
    		names : ["lib"]
    	}),
    	new WebpackMd5Hash()
	]
}
