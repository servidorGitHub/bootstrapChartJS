const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: "development",

    output: {
        clean: true,
    },

    module: {
        rules: [{
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                sources: false
            }
        }]
    },

    optimization: {},

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi webpack app counter',
            //filename: 'index.html',
            template: './src/index.html'
        })
    ]

}