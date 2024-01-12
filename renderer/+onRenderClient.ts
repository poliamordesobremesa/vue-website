// https://vike.dev/onRenderClient
export { onRenderClient };

import type { OnRenderClientAsync } from 'vike/types';
import { getPageTitle } from './getPageTitle';
import { createApp } from './app';

let app: ReturnType<typeof createApp>;
const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
	if (!app) {
		app = createApp(pageContext);
		app.mount('#app');
	} else {
		app.changePage(pageContext);
	}
	document.title = getPageTitle(pageContext);
};
