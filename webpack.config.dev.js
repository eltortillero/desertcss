const commonConfig = require('./webpack.common');
module.exports = {
    mode: "development",
    entry: commonConfig.resolveFiles,
    output: commonConfig.output,
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "/",
                            name: '[path]/[name].css',
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        }
                    }
                ]
            },
        ],
    },
};