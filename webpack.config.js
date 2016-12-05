var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require("webpack-md5-hash");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// css autoprefixer
var precss = require("precss");
var autoprefixer = require("autoprefixer");

//js页面中__DEV__变量
var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__ : JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});
//webpack.config.js中使用
var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
	
	entry :  {
		bundle : "./src/html/index.js",
		lib : ["react","react-dom"]
	},

	output : {
		path : "./dist",
		filename : __DEV__ ? "[name].js" :"[name][chunkhash:8].js",
		//将entry中lib单独打包一个lib.js中
		chunkFilename : __DEV__ ? "[name].js" : "[name][chunkhash:8].js"
	},

	module : {
		loaders : [
			{
				test : /\.jsx?$/,
				loaders : ["babel?presets[]=es2015&presets[]=react"],
				exclude : /node_modules/
			},
            {
			    test: /\.(less|css)$/,
			    loader:  ExtractTextPlugin.extract("style", "css!postcss!less"),
			},
			//图片路径处理，压缩
			{
			  test: /\.(?:jpg|gif|png|svg)$/,
			  loaders: [
			    'url?limit=8000&name=images/[hash].[ext]'
			  ]
			},
			//处理html页面中图片
			{
				test : /\.html$/,
				loader : "html-withimg-loader"
			}
		]
	},

	resolve : {
		alias : {
			bundlecss : "./src/css/bundle.less"
		}
	},

	postcss : function(){
		return [precss,autoprefixer]
	},

	plugins: [
    	new ExtractTextPlugin(__DEV__ ? "[name].css" : "[name][contenthash:8].css"),
    	new webpack.optimize.CommonsChunkPlugin({
    		names : ["lib"]
    	}),
    	//
    	new WebpackMd5Hash(),
    	devFlagPlugin,
    	//压缩处理
    	/*new webpack.optimize.UglifyJsPlugin({
	      compress: {
	      	warnings: false
	      }
	    }),
		*/
	    new HtmlWebpackPlugin({
	    	filename : "index.html",
	    	chunks : ["bundle","lib"],
	    	template : "./src/html/index.html",
	    	minify : __DEV__ ? false : {
	    		collapseWhitespace: true,
		      	collapseInlineTagWhitespace: true,
		      	removeRedundantAttributes: true,
		      	removeEmptyAttributes: true,
		      	removeScriptTypeAttributes: true,
		      	removeStyleLinkTypeAttributes: true,
		      	removeComments: true
	    	}
	    })
	]
}
