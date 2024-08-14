const rspack = require("@rspack/core");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

/** @type {import('@rspack/cli').Configuration} */
const config = {
    context: process.cwd(),
    entry: ["webpack/hot/poll?100", "./src/main.ts"],
    target: "node",
    externalsType: "commonjs",
    plugins: [
        new rspack.HotModuleReplacementPlugin(),
        new RunScriptWebpackPlugin({
            name: "dev-rspack.js",
            autoRestart: false,
        }),
    ],
    externals: [
        nodeExternals({
            allowlist: ["webpack/hot/poll?100"],
        }),
    ],
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
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(process.cwd(), "dist", "rspack", "dev"),
        filename: "dev-rspack.js",
        clean: true,
    },
    mode: "development",
};

module.exports = config;
