const path = require("path");
const nodeExternals = require("webpack-node-externals");

/** @type {import('@rspack/cli').Configuration} */
const config = {
    context: process.cwd(),
    entry: "./src/main.ts",
    target: "node",
    externalsType: "commonjs",
    devtool: false,
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: "swc-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(process.cwd(), "dist", "rspack", "prod"),
        filename: "prod-rspack.js",
        clean: true,
    },
    mode: "production",
};

module.exports = config;
