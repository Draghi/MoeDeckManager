const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path                 = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: {
        index: "./src/pages/index.tsx",
    },
    output: {
        filename: "[name]_[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [
            path.resolve(__dirname, 'src'),
            './node_modules'
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxSize: Number.MAX_VALUE,
            minSize: 0,
        }
    },
    devtool: "source-map",
    devServer: {
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'src/static'),
        compress: true,
        liveReload: false,
        port: 8080,
        //writeToDisk: true,
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ] },
            { test: /\.(tsx|ts)?$/,                loader: "ts-loader" },
            { test: /\.js$/,                       loader: "source-map-loader", enforce: "pre" },
            { test: /\.(json|bin|7z|zip|gz)$/,     loader: 'file-loader' },
            { test: /\.(png|svg|jpg|gif)$/,        loader: 'file-loader', options: { esModule: false } },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader' },
            { test: /\.html$/,                     loader: 'html-loader', options: { attrs: ['link:href', 'img:src'] }}
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/template.html')
        }),
        new MiniCssExtractPlugin()
    ]
};