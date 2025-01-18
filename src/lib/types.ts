import type SimpleSnackbar from './SimpleSnackbar.svelte';

export type SnackbarContext = {
	open: (...args: Parameters<SimpleSnackbar['open']>) => ReturnType<SimpleSnackbar['open']>,
	error: (...args: Parameters<SimpleSnackbar['error']>) => ReturnType<SimpleSnackbar['error']>,
	close: (...args: Parameters<SimpleSnackbar['close']>) => ReturnType<SimpleSnackbar['close']>,
}