const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //punto de entrada
    output: {                //donde va vivir el proyectp
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-shop/bundle.js', //nombre al empaquetado
        publicPath: '/react-shop',
    }, 
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components' : path.resolve(__dirname, 'src/components/'),
            '@containers' : path.resolve(__dirname, 'src/containers/'),
            '@pages' : path.resolve(__dirname, 'src/pages/'),
            '@styles' : path.resolve(__dirname, 'src/styles/'),
            '@icons' : path.resolve(__dirname, 'src/assets/icons/'),
            '@logos' : path.resolve(__dirname, 'src/assets/logos/'),
            '@img' : path.resolve(__dirname, 'src/assets/img/'),
            '@hooks' : path.resolve(__dirname, 'src/hooks/'),
            '@context' : path.resolve(__dirname, 'src/context/')
        }
    },
    module: {
        rules: [ 
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                        loader: 'html-loader'
                    }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    // configuracion modo desarrollo local
    // static es lo que antes se conocia como contentBase
    devServer:{ 
        // static: path.join(__dirname, 'dist'),
        // port:3005,
        historyApiFallback: true,
    }
}