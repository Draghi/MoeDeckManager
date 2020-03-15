const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin           = require('copy-webpack-plugin');
const path                 = require('path');

const entryPoints = {
    home:         {entry:"index",               title: "NvM Home"   },

    toolsEncrypt: {entry:"admin/encrypt/index", title: "NvM Encrypt"},
    
    reignArc1:       {entry: "admin/reign/arc1",         title: "RoS - Arc 1"     },
    reignCharacters: {entry: "reignofstrahd/characters", title: "RoS - Characters"},
    reignRules:      {entry: "reignofstrahd/rules",      title: "RoS - Rules"     },
}

module.exports = {
    mode: "development",
    watch: true,
    entry: Object.keys(entryPoints).reduce((r, v) => {
        r[v] = path.resolve(__dirname, "src/pages/", `${entryPoints[v].entry}.tsx`);
        return r; 
    }, {}),
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
        contentBase: path.join(__dirname, 'src/'),
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
            { test: /\.(bin|7z|zip|gz)$/,          loader: 'file-loader' },
            { test: /\.(png|svg|jpg|gif|svg)$/,    loader: 'file-loader', options: { esModule: false } },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader' },
            { test: /\.html$/,                     loader: 'html-loader', options: { attrs: ['link:href', 'img:src'] }},
            { test: /\.aes$/,                      loader: 'raw-loader'}
        ],
    },
    plugins: [
        ...Object.keys(entryPoints).map(v => new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/template.ejs'),
            filename: `${entryPoints[v].entry}.html`,
            chunks: [v],
            templateParameters: (compilation, assets, assetTags, options) => ({
                compilation,
                webpackConfig: compilation.options,
                htmlWebpackPlugin: { tags: assetTags, files: assets, options },
                title: v.title
            }),
        })),
        new CopyPlugin([
            { from: path.join(__dirname, 'src/static'), to: path.join(__dirname, 'dist/static'), },
        ]),
        new MiniCssExtractPlugin()
    ]
};