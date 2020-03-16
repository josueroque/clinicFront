const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    devtool:'sorce-map',
    entry:'./src/index.js', 
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:4000
    },
    resolve:{
        extensions:['.js','.jsx']
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

        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]

}