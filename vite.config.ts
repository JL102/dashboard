import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['@smui/common', '@smui/card', '@smui/button', '@smui/dialog', '@smui/form-field', '@smui/layout-grid', '@smui/textfield']
	},
});
