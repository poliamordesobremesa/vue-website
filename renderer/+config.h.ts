import { onHydrationEnd, onPageTransitionStart, onPageTransitionEnd } from './onPageTransitionHooks';
import type { Config } from 'vike/types';

// https://vike.dev/config
const vikeConfig: Config = {
	clientRouting: true,
	prefetchStaticAssets: 'viewport',
	onHydrationEnd,
	onPageTransitionStart,
	onPageTransitionEnd,
	// https://vike.dev/meta
	meta: {
		// Create new config 'title'
		title: {
			env: { server: true, client: true },
		},
	},
};
export default vikeConfig;
