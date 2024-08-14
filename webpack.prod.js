const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
    entry: ["./src/main.ts"],
    target: "node",
    externals: [nodeExternals()],
    externalsPresets: { node: true },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: "swc-loader",
                exclude: ["/node_modules/"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.join(process.cwd(), "dist", "webpack", "prod"),
        filename: "prod-swc.js",
    },
};

module.exports = () => {
    config.mode = "production";
    return config;
};
