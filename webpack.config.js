
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	devtool: 'source-map',
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		historyApiFallback: true,
		port: 8181
   	},
	module: {
      loaders: [
        
         { 
            loader: 'babel-loader',
            query: {
				presets: ['es2015', 'react']
			}
         }     
      ]              
   }
}