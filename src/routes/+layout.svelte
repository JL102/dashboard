<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import SimpleSnackbar from '$lib/SimpleSnackbar.svelte';
	import type { SnackbarContext } from '$lib/types';
	import { setContext } from 'svelte';
	
	let snackbar: SimpleSnackbar;
	let snackbarContext: SnackbarContext = {
		open: (...args) => {
			if (!snackbar) throw new Error('Snackbar not defined');
			return snackbar.open(...args);
		},
		error: (...args) => {
			if (!snackbar) throw new Error('Snackbar not defined');
			return snackbar.error(...args);
		},
		close: (...args) => {
			if (!snackbar) throw new Error('Snackbar not defined');
			return snackbar.close(...args);
		}
	};
	
	setContext('snackbar', snackbarContext);
</script>

<main class="prose prose-invert prose-slate max-w-none">
	{@render children()}
</main>
<SimpleSnackbar bind:this={snackbar} />