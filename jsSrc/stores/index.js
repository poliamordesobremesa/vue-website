import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import { defineStore } from 'pinia';
export const useAppStore = defineStore('storeId', {
	state: () => ({
		bootstrap,
	}),
});
