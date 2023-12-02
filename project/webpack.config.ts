import path from 'path';
import webpack from 'webpack';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';

const config: webpack.Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	module: {
    rules: buildLoaders(),
  },
  resolve: buildResolvers(),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	plugins: buildPlugins(),
}

export default config;