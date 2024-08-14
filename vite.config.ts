import path from "path";
import { defineConfig, loadEnv } from "vite";
import { VitePluginNode as vnode } from "vite-plugin-node";

export default async ({ command, mode }: any) => {
    const env = loadEnv(mode, path.resolve(process.cwd(), ".env"));

    return defineConfig({
        envDir: "./.env",
        server: {
            host: "0.0.0.0",
            port: 3000,
            hmr: true,
        },
        plugins: [
            ...vnode({
                adapter: "nest",
                appPath: path.resolve(process.cwd(), "src", "main.vite.ts"),
                exportName: "app",
                tsCompiler: "swc",
                swcOptions: {
                    sourceMaps: true,
                    jsc: {
                        parser: {
                            syntax: "typescript",
                            decorators: true,
                        },
                        transform: {
                            legacyDecorator: true,
                            decoratorMetadata: true,
                        },
                        baseUrl: "./",
                    },
                },
            }),
        ],
        build: {
            outDir: path.resolve(process.cwd(), "dist", "vite", "prod"),
        },
        optimizeDeps:{
            
        }
    });
};
