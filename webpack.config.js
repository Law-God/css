var webpack = require("webpack");



var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	
	entry : ['./index.js'],

	output : {
		path : "./dist",
		filename : "bundle.js"
	},

	module : {
		loaders : [
			{
				test : /\.js$/,
				loaders : ["babel"],
				exclude : /node_modules/
			},
            {
			    test: /\.css$/,
			     loader:  ExtractTextPlugin.extract("style-loader","css-loader")
			},
			,
            {
	            test:  /\.scss$/,
	             loader:  "style!css!sass"
	        },
	            {
	            test:  /\.less$/,
	             loader:  "style!css!less"
	        },
		]
	},

	plugins: [
    	new ExtractTextPlugin("styles.css")
	]
}
