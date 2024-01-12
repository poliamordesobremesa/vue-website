import md from 'unplugin-vue-markdown/dist/vite';
import vue from '@vitejs/plugin-vue';
import { UserConfig } from 'vite';
import vike from 'vike/plugin';
import * as path from 'path';

const config: UserConfig = {
	resolve: {
		alias: {
			'@renderer': path.resolve(__dirname, './renderer'),
			'@components': path.resolve(__dirname, './components'),
		},
	},
	plugins: [
		vike({ prerender: true }),
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		md({}),
	],
	// We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks Vike's CI
	optimizeDeps: { include: ['cross-fetch'] },
};

export default config;
