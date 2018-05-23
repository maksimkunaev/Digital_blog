const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: `${srcPath}/index.js`,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                         loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${srcPath}/index.html`
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src/components/MainPage/media'),
                to: path.join(__dirname, 'dist/images')},
            {
                from: path.join(__dirname, 'src/components/Animation/images'),
                to: path.join(__dirname, 'dist/images') }
          ])
    ]
}
