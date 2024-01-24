/*
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types";

interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
    });

    // Добавление загрузчиков и плагинов для обработки файлов CSS и SCSS
    if(config.module!.rules!=undefined){

        config.module!.rules.push(
            {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        );
    }

    config.plugins!.push(
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    );

    return config;
};
 */


import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types";
import Dotenv from 'dotenv-webpack'; // Импортируем Dotenv

interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
    });

    // Добавление загрузчиков и плагинов для обработки файлов CSS и SCSS
    if(config.module!.rules!=undefined){

        config.module!.rules.push(
            {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        );
    }

    // Добавление плагина Dotenv
    config.plugins!.push(
        new Dotenv(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    );

    return config;
};


//npm i --save-dev @types/dotenv-webpack
//npm install dotenv-webpack --save-dev