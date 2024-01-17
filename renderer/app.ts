import { createSSRApp, defineComponent, h, markRaw, reactive } from 'vue';
import type { PageContext } from 'vike/types';
import PageShell from './PageShell.vue';
import { createPinia } from 'pinia';

import { setPageContext } from './usePageContext';
import { registerPrimeVue } from './primeVue';
import type { Component } from './types';

export { createApp };

function createApp(pageContext: PageContext) {
	const { Page } = pageContext;

	let rootComponent: Component & { Page: Component };
	const PageWithWrapper = defineComponent({
		data: () => ({
			Page: markRaw(Page),
		}),
		created() {
			rootComponent = this;
		},
		render() {
			return h(
				PageShell,
				{},
				{
					default: () => {
						return h(this.Page);
					},
				}
			);
		},
	});

	const app = createSSRApp(PageWithWrapper);

	const store = createPinia();
	app.use(store);

	registerPrimeVue(app);

	// We use `app.changePage()` to do Client Routing, see `+onRenderClient.ts`
	objectAssign(app, {
		changePage: (pageContext: PageContext) => {
			Object.assign(pageContextReactive, pageContext);
			rootComponent.Page = markRaw(pageContext.Page);
		},
	});

	// When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `+onRenderClient.ts`).
	// We therefore use a reactive pageContext.
	const pageContextReactive = reactive(pageContext);

	// Make `pageContext` accessible from any Vue component
	setPageContext(app, pageContextReactive);

	return app;
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj extends object, ObjAddendum>(
	obj: Obj,
	objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
	Object.assign(obj, objAddendum);
}
