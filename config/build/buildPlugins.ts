import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import dotenv from "dotenv"
export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        }),

    ]
   
   // const env = dotenv.config().parsed;
// сделаем reduce, чтобы сделать объект

/*
const envKeys: { [key: string]: string } = Object.keys(env).reduce((prev, next: string) => {
  //  if (typeof next === "string" && typeof prev === "string") {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
   // }
    return prev;
}, {} as { [key: string]: string }); */




/*const env = dotenv.config().parsed;
const envKeys: { [key: string]: string } = env
  ? Object.keys(env).reduce((prev, next: string) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {} as { [key: string]: string })
  : {};

 */
    if(isDev) {
        plugins.push(new webpack.ProgressPlugin())
        /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
  //  plugins.push( new DefinePlugin(envKeys))
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new CopyPlugin({
            patterns: [
                { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') },
            ],
        }),)
    }

    if(analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}