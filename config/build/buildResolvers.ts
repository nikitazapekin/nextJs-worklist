import {Configuration} from "webpack";
import {BuildOptions} from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        },
    }
} /*


import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(options: BuildOptions): Configuration {
    return {
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': options.paths.src,
            },
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',  // Injects styles into the DOM
                        'css-loader',    // Translates CSS into CommonJS
                        'sass-loader',   // Compiles Sass to CSS
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
    };
}
*/