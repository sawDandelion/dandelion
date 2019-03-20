const VueLoader = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/main.js')],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index-[hash:6].js'
    },

    mode: 'development',

    // 便于调试
    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: '[name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    resolve: {

        // 查询文件时，自动补充后缀
        extensions: ['.js', '.vue', '.json'],

        // 替换src路径
        alias: {
          '@': path.resolve('src')
        }
    },

    plugins: [
        new VueLoader(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}
