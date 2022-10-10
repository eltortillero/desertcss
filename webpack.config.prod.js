const commonConfig = require('./webpack.common');
module.exports = {
    mode: "production",
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
                        options: { outputPath: "/", name: "[path]/[name].min.css" },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        }
                    }
                ],
            },
        ],
    },
};