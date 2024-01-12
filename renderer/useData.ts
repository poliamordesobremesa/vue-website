// Hook `useData()` to make `pageContext.data` available from any Vue component.
// See
// * https://vike.dev/data
// * https://vike.dev/pageContext-anywhere

export { useData };

import { usePageContext } from './usePageContext';
import { type ComputedRef, computed } from 'vue';

function useData<Data>(): ComputedRef<Data> {
	const data = computed(() => (usePageContext() as { data: Data }).data);
	return data;
}
