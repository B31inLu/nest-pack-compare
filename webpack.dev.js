const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

const config = {
    entry: ["webpack/hot/poll?100", "./src/main.ts"],
    externalsPresets: { node: true },
    target: "node",
    externals: [
        nodeExternals({
            allowlist: ["webpack/hot/poll?100"],
        }),
    ],
    devtool: "eval-cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: ["swc-loader"],
                exclude: ["/node_modules/"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new RunScriptWebpackPlugin({ name: "dev-swc.js", autoRestart: false }),
    ],
    output: {
        path: path.join(process.cwd(), "dist", "webpack", "dev"),
        filename: "dev-swc.js",
        clean: true,
    },
};

module.exports = () => {
    config.mode = "development";
    return config;
};
