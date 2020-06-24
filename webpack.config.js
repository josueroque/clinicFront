const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack=require('webpack');
module.exports={
    devtool:'sorce-map',
 //   entry:'./src/index.js', 
    entry: {
      app: [
        'react-app-polyfill/ie9', // Only if you want to support IE 9
        'react-app-polyfill/stable',
        './src/index.js',
      ],
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath: '/'
    },
    devServer:{ 
        port:4000,
        historyApiFallback: true,
        // contentBase: './',
        // hot: true 
    },
    resolve:{
        extensions:['.js','.jsx','.jpg','.png'] 
    }
    ,
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  },
                ],
              },
              {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },

              {
                test: /\.(png|svg|jpg|gif)$/,
                  use: [
                           'file-loader',
                        ],
              },

        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.ProgressPlugin(),
//        new CleanWebpackPlugin(),

    ],


}